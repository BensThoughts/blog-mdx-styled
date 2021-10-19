import React, {useContext, useEffect, useReducer} from 'react';

type Action = {type: 'addImage', payload: string}
type Dispatch = (action: Action) => void;
type State = {
  [id: string]: boolean;
}
type ImageCacheProviderProps = {children: React.ReactNode}

const ImageCacheContext = React.createContext<
  {state: State, dispatch: Dispatch} | undefined
>(undefined);

function imageReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addImage': {
      const id = action.payload;
      // state[action.payload] = true;
      return {
        [id]: true,
        ...state,
      };
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

function ImageCacheProvider({children}: ImageCacheProviderProps) {
  const [state, dispatch] = useReducer(imageReducer, {});
  const value = {state, dispatch};
  return (
    <ImageCacheContext.Provider value={value}>
      {children}
    </ImageCacheContext.Provider>
  );
}

function useProgressiveImage(lowQualitySrc: string, highQualitySrc: string) {
  const context = useContext(ImageCacheContext);
  if (context === undefined) {
    throw new Error('useProgressiveImage must be used within a ImageCacheProvider');
  }
  const state = context.state;
  const dispatch = context.dispatch;
  const imgCached = state[highQualitySrc];
  let src;
  let blur;
  if (imgCached || !lowQualitySrc) {
    src = highQualitySrc;
    blur = false;
  } else {
    src = lowQualitySrc;
    blur = true;
  }

  useEffect(() => {
    if (!imgCached) {
      const img = new Image();
      img.src = highQualitySrc;

      img.onload = () => {
        // setSrc(highQualitySrc);
        // dispatch(setImgLoaded({imgSrc: highQualitySrc}));
        dispatch({type: 'addImage', payload: highQualitySrc});
      };
    }
  }, [lowQualitySrc, highQualitySrc, imgCached, dispatch]);

  return [src, blur] as const;
}

export {ImageCacheProvider, useProgressiveImage};
