import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "loginData",
  initialState: {
    email: "",
    username: "",
    password: "",
    token: "",
    first_name: "",
    last_name: "",
    phone: "",
    location: "",
    about: "",
    points: 1,
    company: "",
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
    update_firstName: (state, action) => {
      state.first_name = action.payload;
    },
    update_lastName: (state, action) => {
      state.last_name = action.payload;
    },
    update_phone: (state, action) => {
      state.phone = action.payload;
    },
    update_company: (state, action) => {
      state.company = action.payload;
    },
    update_location: (state, action) => {
      state.location = action.payload;
    },
    update_aboutMe: (state, action) => {
      state.about = action.payload;
    },
    update_points: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const {
  update_email,
  update_password,
  update_token,
  update_username,
  update_firstName,
  update_lastName,
  update_phone,
  update_location,
  update_aboutMe,
  update_points,
  update_company,
} = LoginSlice.actions;
export default LoginSlice.reducer;
