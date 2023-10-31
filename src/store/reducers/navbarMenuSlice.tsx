import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNav: false
};

const navbarMenuSlice = createSlice({
  name: 'navbarMenuSlice',
  initialState,
  reducers: {
    slideNav: (state) => {
      state.showNav = !state.showNav;
    }
  }
});

export const { slideNav } = navbarMenuSlice.actions;
export default navbarMenuSlice.reducer;
