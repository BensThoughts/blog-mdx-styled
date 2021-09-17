import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {RootState} from '@app/store/store';

type ImgSrc = {
  [imgSrc: string]: boolean;
}

const initialState: ImgSrc = {};

const imgCacheSlice = createSlice({
  name: 'imgCache',
  initialState,
  reducers: {
    setImgLoaded(state, action: PayloadAction<{imgSrc: string}>) {
      const imgSrc = action.payload.imgSrc;
      state[imgSrc] = true;
    },
  },
});

export const {
  setImgLoaded,
} = imgCacheSlice.actions;

export const selectImgBySrc = (state: RootState, imgSrc: string) => state.imgCache[imgSrc];

export default imgCacheSlice.reducer;
