//
// Adjust this file for your needs
//
//

import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "postData",
  initialState: {
    post: [],
    edited_posts: [],
    deleted_posts: [],
    comment: [],
    delete_comments: [],
    deleted_comments: [],
    level: 0,
    vote: 0,
    badge: [],
  },
  reducers: {
    update_post: (state, action) => {
      state.post = action.payload;
    },
    edit_post: (state, action) => {
      state.edited_posts = action.payload;
      // Not sure about this logic haven't tried it..
      // play arround
      // state.edit_Post.pop()
      // state.edit_Post.push(state.post)
      console.log(state.edited_posts);
    },
    edited_posts: (state, action) => {
      state.edited_posts = action.payload;
      // Not sure about this logic haven't tried it..
      // play arround
      // state.edit_Post.pop()
      // state.edit_Post.push(state.posts)

      console.log(state.edited_posts);
    },
    deleted_posts: (state, action) => {
      state.deleted = action.payload;
      // Not sure about this logic haven't tried it..
      // play arround
      // state.edit_Post.pop()
      // state.edit_Post.push(state.posts)

      console.log(state.edited_posts);
    },
    add_comment: (state, action) => {
      state.comment = action.payload;
      state.comment.push(state.comment);
      console.log(state.comment);
    },
    delete_comment: (state, action) => {
      state.delete_comments = action.payload;
      state.delete_comments.pop();
      console.log(state.delete_comments);
    },
    deleted_comment: (state, action) => {
      state.deleted_comments = action.payload;
      state.deleted_comments.pop();
      console.log(state.deleted_comments);
    },
    update_vote: (state, action) => {
      state.vote = action.payload;
      console.log(state.vote);
    },
    update_badge: (state, action) => {
      state.badge = action.payload;
      console.log(state.badge);
    },
    update_level: (state, action) => {
      state.level = action.payload;
      console.log(state.level);
    },
  },
});

export const {
  post,
  edited_posts,
  deleted_posts,
  comment,
  delete_comments,
  deleted_comments,
  level,
  badge,
  vote,
} = PostSlice.actions;
export default PostSlice.reducer;
