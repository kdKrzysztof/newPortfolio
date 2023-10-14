import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isLoadingAnimSlice = createSlice({
  name: 'isLoadingAnimation',
  initialState,
  reducers: {
    animationOn: () => {
      return true;
    },
    animationOff: () => {
      return false;
    }
  }
});

export const { animationOn, animationOff } = isLoadingAnimSlice.actions;
export default isLoadingAnimSlice.reducer;
