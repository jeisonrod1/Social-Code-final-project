import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import { Provider } from "react-redux";



import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Userprofile from "./components/Userprofile/Profile/index";
 import Registration from "./components/Registration/Registration";

import Login from "./components/Login";
import FriendsPage from "./components/FriendsPage";
import CreatePost from "./components/CreatePost/CreateCodePost";


import JudgeLanding from "./components/Judge/components/Landing";
import AccessEditor from "./components/Editor/AccessEditor";
import EditorPage_HTML_CSS_JS from "./components/Editor/EditorPage_HTML_CSS_JS";
import React from "react";
import "./App.css";

import { Toaster } from "react-hot-toast";
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

                        }
                        }
                    />
                    </div>
                  <main className={`xtxt${toggleClassCheck}`}>
                    <Navigation />
                    <Routes>
                      <Route path="/" element={<Posts />} />
                      <Route path="posts" element={<Posts />} />
                      <Route path="createpost/" element={<CreatePost />} />
                      <Route path="find_friends" element={<FriendsPage />} />
                      <Route path="/editor" element={<AccessEditor />} />
                      <Route path="/editor/:roomId" element={<EditorPage_HTML_CSS_JS />} />
                      <Route path="userprofile" element={<Userprofile />} />
                      <Route path="my_friends/" element={<FriendsPage/>}/>
                      <Route path="judgeeditor/" element={<JudgeLanding />} />

                      <Route path="login" element={<Login />} />
                      <Route path="registration" element={<Registration />} />


                    </Routes>
                    <button
                      className={`btn-x${toggleClassCheck}`}
                      onClick={handleClick}
                    >
                  {!btnState ? <img className="sun-icon" src={SunIcon}/> : <img className="moon-icon" src={MoonIcon}/>}

                    </button>
                    <Footer />
                  </main>


                </BrowserRouter>
                </ThemeProvider>

            </>
          );
        }

export default App;
