import { createSlice } from "@reduxjs/toolkit";

export const ModelSlice = createSlice({
  name: "modelData",
  initialState: {
    modelRead_is_open: false,
    modelCreate_is_open: false,
    modelMore_is_open: false,
    modelDel_is_open: false,
  },
  // reducers. Slice can have mulitple reducers. Don't forget to export them each.
  reducers: {
    // adding item to cart
    toggle_model_read: state => {
      state.modelRead_is_open = !state.modelRead_is_open;
    },
    toggle_model_more: state => {
      state.modelMore_is_open = !state.modelMore_is_open;
    },
    toggle_model_create: state => {
      state.modelCreate_is_open = !state.modelCreate_is_open;
    },
    toggle_model_del: state => {
      state.modelDel_is_open = !state.modelDel_is_open;
    },
  },
});

export const {
  toggle_model_read,
  toggle_model_more,
  toggle_model_create,
  toggle_model_del,
} = ModelSlice.actions;
export default ModelSlice.reducer;
