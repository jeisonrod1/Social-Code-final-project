import React, { useEffect, useState } from "react";

import { EditorView } from "@codemirror/view";

// Style
import "./Editor_HTML_CSS_JS.css";

// CodeMirror Editor Itself
import CodeMirror from "@uiw/react-codemirror";
// Extensions... Language Extensions
import {
  loadLanguage,
  //   langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";

// Font Icons Colapse and Extend button
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faCompress,
  faCompressAlt,
  faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";
import { EditorContainer, EditorTitle } from "./StyledEditorHTML_CSS_JS";

// Expand and Colapse Button

export const Editor_HTML_CSS_JS = props => {
  const {
    language,
    displayname,
    value,
    theme,
    socketRef,
    roomId,
    extensions,
    handleEditorChange,
  } = props;
  const [open, setOpen] = useState(true);

  return (
    <>
      <EditorContainer
        className={`editor-container ${open ? "" : "collapsed"}`}
      >
        <EditorTitle>
          {displayname}
          <button
            className="expand-collapse-btn"
            type="button"
            onClick={() => setOpen(prevOpen => !prevOpen)}
          >
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
          </button>
        </EditorTitle>
        <div className="codemirror-container">
          <CodeMirror
            className="code-mirror-wrapper"
            displayname={displayname}
            onChange={e => handleEditorChange(e)}
            value={value}
            height="100%"
            width="100%"
            extensions={extensions}
            theme={theme}
          />
        </div>
      </EditorContainer>
    </>
  );
};
