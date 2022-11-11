import { configureStore } from "@reduxjs/toolkit";
import loginDataReducer from "./slices/login-slice";
import postDataReducer from "./slices/post-slice";
import modelDataReducer from "./slices/model-slice";

export default configureStore({
  // ⬇️slices⬇️
  reducer: {
    // nameState": nameReducer
    postData: postDataReducer,
    loginData: loginDataReducer,
    modelData: modelDataReducer,
  },
});
