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

      /*

      action.payload = {
        id: 1,
        title: "test",
        description: "lorem",
      };

      const id = action.payload.id;
      const title = action.payload.title;
      const description = action.payload.description;

      */

      state.push({ id, title, description });

      /*
      state.push({
        id: id,
        title: title,
        description: description,
      });
      */
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      return state.filter((post) => post.id !== id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
