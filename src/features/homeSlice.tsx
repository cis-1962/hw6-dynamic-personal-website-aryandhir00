import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

const initialState = {
  buttonVisible: true,
  textVisible: false,
  image: '',
  description: '',
  submitted: false,
  initialImage: '',
  initialDescription: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setButtonVisibility: (state, action: PayloadAction<boolean>) => {
      state.buttonVisible = action.payload;
    },
    setTextVisibility: (state, action: PayloadAction<boolean>) => {
      state.textVisible = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setSubmitted: (state, action: PayloadAction<boolean>) => {
      state.submitted = action.payload;
    },
    setInitialImage: (state, action: PayloadAction<string>) => {
      state.initialImage = action.payload;
    },
    setInitialDescription: (state, action: PayloadAction<string>) => {
      state.initialDescription = action.payload;
    },
  },
});

export const {
  setButtonVisibility,
  setTextVisibility,
  setImage,
  setDescription,
  setSubmitted,
  setInitialImage,
  setInitialDescription,
} = homeSlice.actions;

export const selectHome = (state: RootState) => state.home

export default homeSlice.reducer;



