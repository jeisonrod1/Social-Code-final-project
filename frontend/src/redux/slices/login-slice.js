import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "loginData",
  initialState: {
    email: "",
    username: "",
    token: "",
    page: "",
  },
  reducers: {
    update_email: (state, action) => {
      state.email = action.payload;
    },
    update_password: (state, action) => {
      state.password = action.payload;
      console.log(state.password);
    },
    update_token: (state, action) => {
      state.token = action.payload;
      console.log(state.token);

      const jsObject = {
        code_media_Token: action.payload,
      };

      localStorage.setItem("auth", JSON.stringify(jsObject));
      console.log(
        "updated token: " +
          jsObject +
          "stringified: " +
          JSON.stringify(jsObject)
      );
    },
    update_username: (state, action) => {
      state.username = action.payload;
    },
    change_page: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  update_email,
  update_password,
  update_token,
  update_username,
  change_page,
} = LoginSlice.actions;
export default LoginSlice.reducer;
