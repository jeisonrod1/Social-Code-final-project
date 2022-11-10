import React, { useEffect, useState } from "react";

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

// Expand and Colapse Button

export const Editor_HTML_CSS_JS = props => {
  const {
    language,
    displayName,
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
      <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button
            className="expand-collapse-btn"
            type="button"
            onClick={() => setOpen(prevOpen => !prevOpen)}
          >
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
          </button>
        </div>
        <div className="codemirror-container">
          <CodeMirror
            className="code-mirror-wrapper"
            displayName={displayName}
            onChange={e => handleEditorChange(e)}
            value={value}
            height="100%"
            width="100%"
            extensions={extensions}
            theme={theme}
            roomId={roomId}
          />
        </div>
      </div>
    </>
  );
};
