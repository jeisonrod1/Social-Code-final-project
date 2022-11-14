import React, { useState, useEffect } from "react";

// Styled Component imports
import {
  BodyForm,
  InputGridDiv,
  InputItemDiv,
  InputItemInputField,
  InputItemImageUpload,
  InputItemTitle,
  SubmitButtonButton,
  SubmitButtonDiv,
  TitleDiv,
  InputItemSelectField,
} from "./index.styled.js";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { defineTheme } from "../../Judge/lib/defineTheme";

function CreatePost() {
  // Logic

  // creating local states to control the input fields
  const [theme, setTheme] = useState("");
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState("");

  // handle inputs
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handledDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };
  const handleCodeChange = (e) => {
    setCode(e);
    console.log(e);
  };

  const handleImageFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://code-media.propulsion-learn.ch/backend/codepost/";
    const fd = new FormData();
    fd.append("title", title);
    fd.append("tags", tags);
    fd.append("language", language);
    fd.append("difficulty", difficulty);
    fd.append("description", description);
    fd.append("code", code);
    fd.append("image", image);
    console.log(fd);

    const config = {
      method: "POST",
      headers: new Headers({
        Authorization: token,
      }),
      body: fd,
    };

    fetch(url, config)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log(response.json());
        }
      })
      .then(setTimeout(() => navigate("/posts"), 1000));
  };
  const navigate = useNavigate();
  return (
    <div>
      <BodyForm onSubmit={handleSubmit}>
        <InputGridDiv>
          <InputItemDiv>
            <InputItemTitle>Title *</InputItemTitle>
            <InputItemInputField
              value={title}
              onChange={handleTitleChange}
            ></InputItemInputField>
          </InputItemDiv>
          <InputItemDiv>
            <InputItemTitle>Language *</InputItemTitle>
            <InputItemSelectField
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
            </InputItemSelectField>
          </InputItemDiv>
          <InputItemDiv>
            <InputItemTitle>Tags</InputItemTitle>
            <InputItemInputField
              value={tags}
              onChange={handleTagsChange}
            ></InputItemInputField>
          </InputItemDiv>
          <InputItemDiv>
            <InputItemTitle>Difficulty Level</InputItemTitle>
            <InputItemInputField
              value={difficulty}
              onChange={handleDifficultyChange}
            ></InputItemInputField>
          </InputItemDiv>
          <InputItemDiv>
            <InputItemTitle>Description</InputItemTitle>
            <InputItemInputField
              value={description}
              onChange={handledDescriptionChange}
            ></InputItemInputField>
          </InputItemDiv>
          <InputItemDiv>
            <InputItemTitle>Image</InputItemTitle>
            <input type="file" onChange={handleImageFileChange} />
            {image ? <span>{image.name}</span> : <span></span>}
            {/*<InputItemImageUpload value={imageFile} onChange={handleImageFileChange} type={"file"} id={"upload"}/>*/}
          </InputItemDiv>
          <InputItemDiv>
            <InputItemTitle>Code *</InputItemTitle>
            {/*<InputItemInputField value={code} onChange={handleCodeChange}></InputItemInputField>*/}
            <Editor
              height="20vh"
              width={`570px`}
              language={language || "javascript"}
              value={code}
              theme={theme.value}
              defaultValue=""
              onChange={handleCodeChange}
            />
          </InputItemDiv>

          
          <SubmitButtonDiv>
            <SubmitButtonButton type="submit">SUBMIT</SubmitButtonButton>
          </SubmitButtonDiv>
        </InputGridDiv>
      </BodyForm>
    </div>
  );
}

export default CreatePost;
