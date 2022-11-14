import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import PostsPage from "./components/PostPage";
import Userprofile from "./components/Userprofile/Profile/index";
import Registration from "./components/Registration/Registration";
import RegistrationValidation from "./components/Registration/RegistrationValidation";
import Login from "./components/Login";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import JudgeLanding from "./components/Judge/components/Landing";

import "./App.css";
import AccessEditor from "./components/Editor/AccessEditor";
import EditorPage_HTML_CSS_JS from "./components/Editor/EditorPage_HTML_CSS_JS";
import React from "react";

import { Toaster } from "react-hot-toast";
import CreatePost from "./components/CreatePost/CreateCodePost";

function App() {
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassCheck = btnState ? " light" : " dark";

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Toaster
              position="top-center"
              toastOptions={{
                success: {
                  theme: {
                    primary: "#4aed88",
                  },
                },
              }}
            />
          </div>
          <main className={`xtxt${toggleClassCheck}`}>
            <Header /> {/* Mads */}
            <Routes>
              <Route path="posts" element={<Posts />} /> {/* Mads */}
              <Route path="postpage" element={<PostsPage />} />
              {/* Mads */}
              <Route path="/editor" element={<AccessEditor />}></Route>
              <Route
                path="/editor/:roomId"
                element={<EditorPage_HTML_CSS_JS />}
              ></Route>
              {/* Mads */}
              <Route path="userprofile" element={<Userprofile />} />{" "}
              {/* Mads */}
              <Route path="login" element={<Login />} /> {/* Mads */}
              <Route path="registration" element={<Registration />} />{" "}
              <Route
                path="registration/validation"
                element={<RegistrationValidation />}
              />{" "}
              {/* Mads */}
              <Route path="judgeeditor/" element={<JudgeLanding />} />{" "}
              {/* Mads */}
            </Routes>
            <button
              className={`btn-x${toggleClassCheck}`}
              onClick={handleClick}
            >
              Theme ={`${toggleClassCheck}`}
            </button>
            <Footer /> {/* Mads */}
          </main>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
