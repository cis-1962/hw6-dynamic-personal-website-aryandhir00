import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface Post {
  id: number, 
  name: string;
  description: string;
  image: string;
}

const initialState = {
  buttonVisible: true,
  textVisible: false,
  addVisible: true,
  postVisible: false,
  image: '',
  description: '',
  submitted: false,
  initialImage: '',
  initialDescription: '',
  posts: [] as Post[]
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setAddVisibility: (state, action: PayloadAction<boolean>) => {
      state.addVisible = action.payload;
    },
    setPostVisibility: (state, action: PayloadAction<boolean>) => {
      state.postVisible = action.payload;
    },
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
    addPost: (state, action: PayloadAction<{ id: number, name: string; description: string; image: string }>) => {
      state.posts.push({
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        image: action.payload.image,
      });
    },
    removePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    }
    
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
  addPost,
  setAddVisibility,
  setPostVisibility,
  removePost
} = homeSlice.actions;

export default homeSlice;



