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

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update_email } from "../redux/slices/login-slice";

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

const Registration = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  // handle inputs
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  // Handle Submit
  const handleSubmit = e => {
    // Updating Redux store slice
    dispatch(update_email(e.target.value));
    // Updating email hook
    setEmail(e.target.value);
    console.log(email);
    // Updating bolean hook
    setSuccess(true);

    const url = "https://code-media.propulsion-learn.ch/backend/registration/";
    // "https://localhost:8001/backend/registration/";

    const jsBody = {
      email: email,
    };

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jsBody),
    };

    fetch(url, config).then(response => {
      if (response.status === 200) {
        alert("Check your email adreess");
        console.log("Fetch Worked");
      } else {
        console.log(response.json());
      }
    });
  };
  return (
    <>
      <RegistrationPageContainer>
        <SignInForm onSubmit={handleSubmit}>
          <SignInTitle>Sign Up</SignInTitle>
          <Inputs>
            <EmailLabel src={LoginIcon} />
            <EmailInput
              placeholder="enter your email"
              type="email"
              onChange={handleEmailChange}
            />
          </Inputs>
          <button>Sign Up</button>
        </SignInForm>
      </RegistrationPageContainer>
    </>
  );
};
export default Registration;
