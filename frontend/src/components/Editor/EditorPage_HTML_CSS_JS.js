import React, { useState, useEffect, useRef } from "react";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

// STYLED COMPONENTS -start
import "./Editor_HTML_CSS_JS.css";

// Custom Hook (local storage)
import { useLocalStorage } from "./hooks/useLocalStorage";

// STYLED COMPONENTS -end
// CodeMirror
import { Editor_HTML_CSS_JS } from "./Editor_HTML_CSS_JS";
import { hyperLink } from "@uiw/codemirror-extensions-hyper-link";

import Client from "./Client";

// Extensions... Language Extensions
import {
  loadLanguage,
  //   langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";

// Built in Themes;
import {
  abcdef,
  androidstudio,
  atomone,
  bbedit,
  bespin,
  dracula,
  duotoneDark,
  duotoneLight,
  eclipse,
  githubDark,
  githubLight,
  okaidia,
  sublime,
  xcodeDark,
  xcodeLight,
} from "@uiw/codemirror-themes-all";
import { faHelicopterSymbol } from "@fortawesome/free-solid-svg-icons";

// const Page = styled.div``;

const EditorPage_HTML_CSS_JS = props => {
  const { handleUsername } = props;
  // Editor
  const [srcDoc, setSrcDoc] = useState("");
  const [htmlState, setHtmlState] = useLocalStorage(
    "",
    "<h1 id='hello'> hello world </h1>"
  );
  const [cssState, setCssState] = useLocalStorage(
    "",
    "#hello {\ncolor: red\n}"
  );
  const [jsState, setJsState] = useLocalStorage(
    "",
    "document.body.style.background = '#f3f'"
  );
  // Editor

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
    <body>${htmlState}</body>
    <style>${cssState}</style>
    <script>${jsState}</script>
    </html>
    `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlState, cssState, jsState]);

  //  // Room
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);
  let usernames = ["Gio", "Alex", "Kitti", "Jeison", "Mads"];

  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID has been copied to your clipboard");
    } catch (err) {
      toast.error("Could not copy the Room ID");
      console.error(err);
    }
  }

  function leaveRoom() {
    reactNavigator("/editor");
  }

  if (!location.state) {
    return <Navigate to="/editor" />;
  }

  return (
    <>
      <br />
      <br />
      <div className="mainWrap">
        <div className="aside">
          <div className="asideInner">
            <div className="logo">
              <img
                className="logoImage"
                src="/logo_socialcode.jpg"
                alt="logo"
              />
            </div>
            <h3>Connected</h3>
            <div className="clientsList">
              {/* For usernames */}
              {usernames.map(client => (
                <Client
                  // onChange={handleUsername}
                  key={client}
                  username={client}
                />
              ))}
            </div>
          </div>
          <button className="Editorbtns copyBtn" onClick={copyRoomId}>
            Copy ROOM ID
          </button>
          <button className="Editorbtns leaveBtn" onClick={leaveRoom}>
            Leave
          </button>
        </div>
        <div className="editorWrap">
          <div className="pane top-pane">
            <Editor_HTML_CSS_JS
              displayName={"HTML"}
              // value={e => setHtmlState(e.target.value)}
              value={htmlState}
              handleEditorChange={
                // console.log
                setHtmlState
              }
              extensions={[hyperLink, langs.html()]}
              theme={dracula}
            />
            <Editor_HTML_CSS_JS
              displayName={"CSS"}
              // value={e => setHtmlState(e.target.value)}
              value={cssState}
              handleEditorChange={
                // console.log
                setCssState
              }
              extensions={[hyperLink, langs.css()]}
              theme={duotoneDark}
            />
            <Editor_HTML_CSS_JS
              displayName={"JS"}
              // value={e => setHtmlState(e.target.value)}
              value={jsState}
              handleEditorChange={
                // console.log
                setJsState
              }
              extensions={[hyperLink, langs.javascript()]}
              theme={xcodeDark}
            />
          </div>
          <div className="pane">
            <iframe
              className="iFrame"
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default EditorPage_HTML_CSS_JS;
