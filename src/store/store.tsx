import { configureStore } from '@reduxjs/toolkit';

import loadingAnimationSlice from './reducers/loadingAnimationSlice';
import themeSlice from './reducers/themeSlice';
import navbarMenuSlice from './reducers/navbarMenuSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    loadingAnimationSlice: loadingAnimationSlice,
    navbarMenuSlice: navbarMenuSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
