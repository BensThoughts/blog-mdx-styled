import {
  createSlice,
  PayloadAction,
  createSelector,
  createEntityAdapter,
  EntityState
} from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

type ImgSrc = {
  [imgSrc: string]: boolean;
}

const imgCacheAdapter = createEntityAdapter<ImgSrc>()

const initialState: ImgSrc = {}

const imgCacheSlice = createSlice({
  name: 'imgCache',
  initialState,
  reducers: {
    setImgLoaded(state, action: PayloadAction<{imgSrc: string}>) {
      // imgCacheAdapter.addOne(state, action.payload);
      const imgSrc = action.payload.imgSrc;
      state[imgSrc] = true;
    }
  }
});

export const {
  setImgLoaded
} = imgCacheSlice.actions;

// export const {
//   selectById: selectImgById
// } = imgCacheAdapter.getSelectors((state: RootState) => state.imgCache)

export const selectImgBySrc = (state: RootState, imgSrc: string) => state.imgCache[imgSrc];

export default imgCacheSlice.reducer;