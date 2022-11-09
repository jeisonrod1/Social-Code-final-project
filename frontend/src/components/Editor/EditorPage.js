import React, { useEffect } from "react";
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
import { useState } from "react";
import { faHelicopterSymbol } from "@fortawesome/free-solid-svg-icons";

const Page = styled.div``;

const Editor_HTML_CSS_JS_Page = props => {
  const [srcDoc, setSrcDoc] = useState(``);

  const [htmlState, setHtmlState] = useLocalStorage(
    "",
    "<h1 id='hello'> hello world </h1>"
  );
  const [cssState, setCssState] = useLocalStorage("", "#hello {\ncolor:red\n}");
  const [jsState, setJsState] = useLocalStorage(
    "",
    `const hello = document.getElementById('hello')
  hello.document.body.style.background-color = 'blue'
  document.body.style.background = '#f3f url('logo_socialcode.jpg') no-repeat top'`
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
    <body>${htmlState}
    <style>${cssState}</style>
    <script>${jsState}</script>
    </body>
    </html>
    `);
      console.log(htmlState);
      console.log(cssState);
      console.log(jsState);
    }, 250);
  }, [htmlState, cssState, jsState]);

  // Setting up a Room for specific user

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
              <h6> Clients: </h6>
            </div>
          </div>
          <button className="btn copyBtn">Copy ROOM ID</button>
          <button className="btn leaveBtn">Leave</button>
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
              style={{ paddingTop: "10px" }}
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="1"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Editor_HTML_CSS_JS_Page;
