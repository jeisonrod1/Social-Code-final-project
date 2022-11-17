import React, { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";

import socialCodeLogo from "../../images/logos/social_code_logo.webp";

// STYLED COMPONENTS -start
import "./Editor_HTML_CSS_JS.css";

// Custom Hook (local storage)
import { useLocalStorage } from "./hooks/useLocalStorage";

// STYLED COMPONENTS -end
// CodeMirror
import { Editor_HTML_CSS_JS } from "./Editor_HTML_CSS_JS";

import Client from "./Client";

// Extensions... Language Extensions
import { langs } from "@uiw/codemirror-extensions-langs";

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

import HomePageWrapper from "./EditorPage_HTML_CSS_JS";
import { client, EditorMainWrap } from "./StyledEditorHTML_CSS_JS";

const EditorPage_HTML_CSS_JS = props => {
  const { handleUsername } = props;

  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [user, setUser] = useState([]);

  const fetchProfile = () => {
    const url =
      "https://code-media.propulsion-learn.ch/backend/api/social/users/me/";

    const config = {
      method: "GET",
      headers: new Headers({
        Authorization: token,
      }),
    };
    if (token) {
      fetch(url, config)
        .then(response => response.json())
        .then(result => setUser(result[0]))
        .catch(error => console.log("error", error));
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  // Editor
  const [srcDoc, setSrcDoc] = useState("");
  const [htmlState, setHtmlState] = useLocalStorage(
    "",
    `<p>&#128512; &#128516; &#128525; &#128151;</p>
<label for="selectcolor"> Color Helper</label>
<input type="color" id="selector">`
  );
  const [cssState, setCssState] = useLocalStorage(
    "",
    `body {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0px;
padding: 0px;
}
p {
font-size: 48px
}
label {
font-family: Arial;
color: white;
font-weight: bold;
font-size: 20px;
margin-bottom: 10px;
}
input #selector:hover {
box-shadow: -5px 6px 15px 1px rgba(0,0,0,0.50);
}
      `
  );

  const [jsState, setJsState] = useLocalStorage("", `//Happy Coding`);
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

  return (
    <div className="editorWrap">
      <div className="pane top-pane">
        <Editor_HTML_CSS_JS
          displayname={"HTML"}
          // value={e => setHtmlState(e.target.value)}
          value={htmlState}
          handleEditorChange={
            // console.log
            setHtmlState
          }
          extensions={[langs.html()]}
          theme={dracula}
        />
        <Editor_HTML_CSS_JS
          displayname={"CSS"}
          // value={e => setHtmlState(e.target.value)}
          value={cssState}
          handleEditorChange={
            // console.log
            setCssState
          }
          extensions={[langs.css()]}
          theme={duotoneDark}
        />
        <Editor_HTML_CSS_JS
          displayname={"JS"}
          // value={e => setHtmlState(e.target.value)}
          value={jsState}
          handleEditorChange={
            // console.log
            setJsState
          }
          extensions={[langs.javascript()]}
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
  );
};

export default EditorPage_HTML_CSS_JS;
