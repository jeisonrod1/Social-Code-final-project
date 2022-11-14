import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import PostsPage from "./components/PostPage";
import Userprofile from "./components/Userprofile/Profile/index";
// import Registration from "./components/Registration/Registration";
// import RegistrationValidation from "./components/Registration/RegistrationValidation";
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
import SunIcon from "./images/icons/svgs/sun.svg"
import MoonIcon from "./images/icons/svgs/moon.svg"
import Navigation from "./components/Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";

function App() {
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassCheck = btnState ? " light" : " dark";

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
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

          
              <Routes>
                <Route path="posts" element={<Posts/>} />
                <Route path="postpage" element={<PostsPage/>} />
                <Route path="/editor" element={<AccessEditor/>} />
                <Route path="/editor/:roomId" element={<EditorPage_HTML_CSS_JS/>} />
                <Route path="userprofile" element={<Userprofile/>} />
                {/* <Route path="registration" element={<Registration/>} /> */}
                {/* <Route path="registration/validation" element={<RegistrationValidation/>} /> */}
                <Route path="judgeeditor/" element={<JudgeLanding/>} />
                <Route path="createpost/" element={<CreatePost/>} />
                <Route path="login" element={<Login/>} />
              </Routes>


              <button
                className={`btn-x${toggleClassCheck}`}
                onClick={handleClick}
              >
              {!btnState ? <img className="sun-icon" src={SunIcon}/> : <img className="moon-icon" src={MoonIcon}/>}
                
              </button>
            
          </main>
        </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
