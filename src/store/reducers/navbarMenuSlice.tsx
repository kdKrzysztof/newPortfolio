import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNav: false
};

const navbarMenuSlice = createSlice({
  name: 'navbarMenuSlice',
  initialState,
  reducers: {
    openNav: (state) => {
      state.showNav = true;
    },
    closeNav: (state) => {
      state.showNav = false;
    }
  }
});

export const { openNav, closeNav } = navbarMenuSlice.actions;
export default navbarMenuSlice.reducer;
