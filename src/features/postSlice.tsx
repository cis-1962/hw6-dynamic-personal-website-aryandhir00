import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface Post {
    id: number;
    postName: string;
    postDescription: string;
    postImage: string;
  }
  
  const initialState = {
    id: 0,
    postName: '',
    postDescription: '',
    postImage: ''
  };

  const postSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
      setPostName: (state, action: PayloadAction<string>) => {
        state.postName = action.payload;
      },
      setPostDescription: (state, action: PayloadAction<string>) => {
        state.postDescription = action.payload;
      },
      setPostImage: (state, action: PayloadAction<string>) => {
        state.postImage = action.payload;
      },
      updatePost: (state, action: PayloadAction<string>) => {
        state.postImage = action.payload;
      },
    },
});

export const {
    setPostName,
    setPostDescription,
    setPostImage
  } = postSlice.actions;
  
  export default postSlice;