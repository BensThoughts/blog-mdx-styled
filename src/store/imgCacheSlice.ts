import {
  createSlice,
  PayloadAction,
  createSelector,
  createEntityAdapter,
  EntityState
} from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

type ImgSrc = {
  id: string;
  lowQualitySrc: string;
  highQualitySrc: string;
}

const imgCacheAdapter = createEntityAdapter<ImgSrc>()

const initialState = imgCacheAdapter.getInitialState();

const imgCacheSlice = createSlice({
  name: 'imgCache',
  initialState,
  reducers: {
    setImgLoaded(state, action: PayloadAction<{id: string, lowQualitySrc: string, highQualitySrc: string}>) {
      imgCacheAdapter.addOne(state, action.payload);
    }
  }
});

export const {
  setImgLoaded
} = imgCacheSlice.actions;

export const {
  selectById: selectImgById
} = imgCacheAdapter.getSelectors((state: RootState) => state.imgCache)

export default imgCacheSlice.reducer;