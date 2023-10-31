import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pause: false,
  animationFinished: false
};

const loadingAnimationSlice = createSlice({
  name: 'loadingAnimation',
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

export const { animationUnpause, animationPause, animationFinished } =
  loadingAnimationSlice.actions;
export default loadingAnimationSlice.reducer;
