import styled from "styled-components";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";


// STYLED COMPONENTS -start

const Div1 = styled.div`
    overlay: rounded-md
    overflow: hidden
    width: 100%
    height: 100%
    box-shadow: 0 5px 8px rgba(0,0,0,0.2);
`;


// STYLED COMPONENTS -end

const JudgeEditor = ({ onChange, language, code, theme }) => {
    const [value, setValue] = useState((code || ""));

    const handleEditorChange = (value) => {
        setValue(value)
        onChange("code", value);
    }


  return (
    <Div1>
      <Editor
        height="85vh"
        width={`60vw`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </Div1>
  );
};
export default JudgeEditor;
