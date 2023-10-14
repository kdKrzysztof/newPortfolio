import { configureStore } from '@reduxjs/toolkit';

import isLoadingAnimSlice from './reducers/isLoadingAnimSlice';
import themeSlice from './reducers/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    isLoadingAnimationRunning: isLoadingAnimSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
