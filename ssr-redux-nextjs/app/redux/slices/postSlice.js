import { createSlice } from "@reduxjs/toolkit";

const initialStateOfPosts = [
  {
    id: 1,
    title: "First Post!",
    description: "Hello!",
  },
  {
    id: 2,
    title: "Second Post",
    description: "More text",
  },
  {
    id: 3,
    title: "Third Post",
    description: "More text",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialStateOfPosts,
  reducers: {
    addPost: (state, action) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
