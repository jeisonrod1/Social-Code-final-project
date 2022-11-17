import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Posts from "./components/Posts";
import Registration from "./components/Registration/";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost/CreateCodePost";
import JudgeLanding from "./components/Judge/components/Landing";
import EditorPage_HTML_CSS_JS from "./components/Editor/EditorPage_HTML_CSS_JS";
import React from "react";
import "./App.css";
import SunIcon from "./images/icons/svgs/sun.svg";
import MoonIcon from "./images/icons/svgs/moon.svg";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import Signup from "./components/Signup";
import Users from "./components/Users";
import Userprofile from "./components/Userprofile";
import UsersID from "./components/FriendsPage";

function App() {
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassCheck = btnState ? " light" : " dark";

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <main className={`xtxt${toggleClassCheck}`}>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="posts" element={<Posts />} />
              <Route path="createpost/" element={<CreatePost />} />
              <Route path="/users" element={<Users />} />
              <Route path="userprofile/" element={<Userprofile />} />
              <Route path="editor/" element={<EditorPage_HTML_CSS_JS />} />
              <Route path="userpage/" element={<UsersID />} />
              <Route path="judgeeditor/" element={<JudgeLanding />} />
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>

            <button
              className={`btn-x${toggleClassCheck}`}
              onClick={handleClick}
            >
              {!btnState ? (
                <img className="sun-icon" src={SunIcon} />
              ) : (
                <img className="moon-icon" src={MoonIcon} />
              )}
            </button>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
