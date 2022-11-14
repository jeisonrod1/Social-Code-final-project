import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import PostsPage from "./components/PostPage";
import Userprofile from "./components/Userprofile/Profile/index";
import EditorPage from "./components/Editor/EditorPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { useState } from "react";

import JudgeLanding from "./components/Judge/components/Landing";

import NavTest from "./components/NavTest";

import "./App.css";
import React from "react";

function App() {
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState(btnState => !btnState)
  }

  let toggleClassCheck = btnState ? ' active': null;

  return (
    <BrowserRouter>
      <main className="light">
        <Header /> {/* Mads */}
        <Routes>
          <Route path="navtest" element={<NavTest />} /> {/* Mads */}
          <Route path="posts" element={<Posts />} /> {/* Mads */}
          <Route path="postpage" element={<PostsPage />} />
          {/* Mads */}
          <Route path="editor" element={<EditorPage />} />
          {/* Mads */}
          <Route path="userprofile" element={<Userprofile />} /> {/* Mads */}
          <Route path="login" element={<Login />} /> {/* Mads */}
          <Route path="registration" element={<Registration />} /> {/* Mads */}
          <Route path="judgeeditor/" element={<JudgeLanding />} /> {/* Mads */}
        </Routes>
        <Footer /> {/* Mads */}
        <button 
        className={`btn${toggleClassCheck}`}
        onclick={handleClick}
        >ToggleCss</button>
      </main>
    </BrowserRouter>
  );
}

export default App;
