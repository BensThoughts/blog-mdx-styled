import {configureStore} from '@reduxjs/toolkit';
import imgCacheSlice from './imgCacheSlice';

export const store = configureStore({
  reducer: {
    imgCache: imgCacheSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
