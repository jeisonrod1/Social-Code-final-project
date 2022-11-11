import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  update_email,
  change_page,
  update_password,
  update_username,
} from "../../redux/slices/login-slice";

import styled from "styled-components";

import Login from "../Login";
import {
  LoginContainer,
  LeftSide,
  LeftBackground,
  LeftTopContainer,
  AppName,
  Slogan,
  LeftBottomContainer,
  ReferralContainer,
  ReferralText,
  ReferralTitle,
  ReferralForm,
  ReferralInput,
  SocialCodeLogo,
  RightSide,
  RightBackground,
  RightTopContainer,
  SignInText,
  SignInIcon,
  RightMiddleContainer,
  SignInForm,
  SignInTitle,
  Inputs,
  EmailLabel,
  EmailInput,
  PasswordLabel,
  PasswordInput,
} from "../Login/index.styled";

import LeftBackgroundImg from "../../images/covers/background-login.jpg";
import RightBackgroundImg from "../../images/covers/right-background.jpeg";
import LoginIcon from "../../images/icons/icon/login.png";
import PasswordIcon from "../../images/icons/icon/padlock.png";
import SocialCode from "../../images/icons/svgs/logo_socialcode.jpg";
import IconFB from "../../images/icons/icon/facebook.png";
import IconTW from "../../images/icons/icon/twitter.png";
import IconIG from "../../images/icons/icon/instagram.png";
import { Left } from "../Userprofile/TopPosts/index.styled";

// STYLED COMPONENTS -start

const RegistrationPageContainer = styled.div`
  padding: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

// STYLED COMPONENTS -end

const RegistrationUsername = () => {
  const dispatch = useDispatch();
  const currentEmail = useSelector(state => state.loginData.email);
  const currentUsername = useSelector(state => state.loginData.username);

  const [feedback, setFeedback] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");

  // makes the "Email" and Username Input controlled. Sends the input to the Login-Redux-Slice.
  const handleEmail = e => {
    dispatch(update_email(e.target.value));
  };
  const handleUsername = e => {
    dispatch(update_username(e.target.value));
  };
  // Controlling the other inputs with local state
  const handleCodeChange = e => {
    setCode(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handlePasswordRepChange = e => {
    setPasswordRep(e.target.value);
  };
  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleSignUp = e => {
    e.preventDefault();
    const url =
      "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/";

    const jsBody = {
      email: currentEmail,
      username: currentUsername,
      code: code,
      password: password,
      password_repeat: passwordRep,
      first_name: firstName,
      last_name: lastName,
    };

    const config = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jsBody),
    };

    fetch(url, config)
      .then(response => {
        if (response.status === 200) {
          // ???
          dispatch(change_page("Login"));
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data.email) {
          setFeedback("There was a Problem with the registration");
        }
      });
  };

  return (
    <>
      <RegistrationPageContainer>
        <SignInForm onSubmit={handleSignUp}>
          <SignInTitle>Sign Up</SignInTitle>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>
          <Inputs type={"text"} value={currentEmail} onChange={handleEmail}>
            <EmailLabel />
            <EmailInput placeholder="enter your username" />
          </Inputs>

          <Inputs
            type={"text"}
            value={currentUsername}
            onChange={handleUsername}
          />
          <p>validation code</p>
          <Inputs type={"text"} value={code} onChange={handleCodeChange} />
          <p>password</p>
          <Inputs
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <p>repeat password</p>
          <Inputs
            type={"password"}
            value={passwordRep}
            onChange={handlePasswordRepChange}
          />
          <p>first name</p>
          <Inputs
            type={"text"}
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <p>last name</p>
          <Inputs
            type={"text"}
            value={lastName}
            onChange={handleLastNameChange}
          />
        </SignInForm>
      </RegistrationPageContainer>
    </>
  );
};

export default RegistrationUsername;
