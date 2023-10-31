import { configureStore } from '@reduxjs/toolkit';

import loadingAnimationSlice from './reducers/loadingAnimationSlice';
import themeSlice from './reducers/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    loadingAnimationSlice: loadingAnimationSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
