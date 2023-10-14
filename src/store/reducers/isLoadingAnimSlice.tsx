import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isLoadingAnimSlice = createSlice({
  name: 'isLoadingAnimation',
  initialState,
  reducers: {
    animationOn: (state) => {
      return true;
    },
    animationOff: (state) => {
      return false;
    }
  }
});

export const { animationOn, animationOff } = isLoadingAnimSlice.actions;
export default isLoadingAnimSlice.reducer;
