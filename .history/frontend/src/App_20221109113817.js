import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import PostsPage from "./components/PostPage";
import Userprofile from "./components/Userprofile/Profile/index";
import EditorPage from "./components/Editor/EditorPage";
import Registration from "./components/Registration";
import Login from "./components/Login";

import JudgeLanding from "./components/Judge/components/Landing";

import NavTest from "./components/NavTest";

import "./App.css";
import "./App-light.css";

function App() {
  return (
    <BrowserRouter>
      <main>
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
      </main>
    </BrowserRouter>
  );
}

export default App;
