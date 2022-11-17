import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Editor_HTML_CSS_JS.css";
import EditorPage_HTML_CSS_JS from "./EditorPage_HTML_CSS_JS";
import { SignupForm } from "../Signup/index.styled";
import {
  HomePageWrapper,
  EnterCartWrapper,
  HomePageLogo,
  MainLabelH4,
  InputGroup,
  JoinBtn,
  CreateInfo,
} from "./StyledEditorHTML_CSS_JS";
import socialCodeLogo from "../../images/logos/social_code_logo.webp";

const AccessEditor = props => {
  // const { handleUsername, usernames = username } = props;
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = e => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room\n");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = e => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <HomePageWrapper>
      <EnterCartWrapper>
        <HomePageLogo
          // src="../../images/logos/social_code_logo.webp"
          src={socialCodeLogo}
          alt="social-code-logo"
        />
        {/* <InputGroup> */}
        <SignupForm style={{}}>
          <label>
            <input
              type="text"
              placeholder="ROOM ID"
              onChange={e => setRoomId(e.target.value)}
              value={roomId}
              onKeyUp={handleInputEnter}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="USERNAME"
              // onChange={e => setUsername(e.target.value)}
              onChange={e => setUsername(e.target.value)}
              value={username}
              // usernames={usernames}
              onKeyUp={handleInputEnter}
            />
          </label>
          <JoinBtn onClick={joinRoom}>Join</JoinBtn>
          {/* <div> */}
          {/* </div> */}
          <CreateInfo>
            Please create a
            <a onClick={createNewRoom} href="" className="createNewBtn">
              ROOM ID
            </a>
          </CreateInfo>
        </SignupForm>
        {/* </InputGroup> */}
      </EnterCartWrapper>
    </HomePageWrapper>
  );
};

export default AccessEditor;
