import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pause: false,
  animationFinished: false
};

const isLoadingAnimSlice = createSlice({
  name: 'isLoadingAnimation',
  initialState,
  reducers: {
    animationUnpause: (state) => {
      state.pause = false;
    },
    animationPause: (state) => {
      state.pause = true;
    },
    animationFinished: (state) => {
      state.animationFinished = true;
    }
  }
});

export const { animationUnpause, animationPause, animationFinished } = isLoadingAnimSlice.actions;
export default isLoadingAnimSlice.reducer;
