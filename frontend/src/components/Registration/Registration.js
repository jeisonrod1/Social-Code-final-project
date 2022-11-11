import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  update_email,
  change_page,
  update_password,
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
import RegistrationUsername from "./RegistrationForm";

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
  // Registration Musts
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const [tokenLS, setTokenLS] = useState(localStorage.getItem("auth"));

  // User Infos
  const [Username, setUsername] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [about_me, setAbout_Me] = useState("");
  const [avatar, setAvatar] = useState("");
  const [points, setPoints] = useState("");
  const [company, setCompany] = useState("");

  // Redux and progressive registration
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.loginData.page);

  // handle inputs
  const handleEmailChange = e => {
    e.preventDefault();
    dispatch(update_email(e.target.value));
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    e.preventDefault();
    dispatch(update_password(e.target.value));
    setPassword(e.target.value);
  };

  // Handle SUBMIT (SungUp)
  const handleSignUp = e => {
    e.preventDefault();
    console.log(e);
    const url = "http://localhost:8001/backend/registration/";
    // "https://code-media.propulsion-learn.ch/backend/registration/";
    const jsBody = {
      email: email,
    };
    console.log(email);

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jsBody),
    };

    fetch(url, config).then(response => {
      if (response.status === 200) {
        console.log("code successfully sent");
        console.log(response);
        return dispatch(change_page("registration/validation"));
      } else {
        return response.json();
      }
    });
  };
  return (
    <>
      {success ? (
        <RegistrationPageContainer>
          <SignInForm onSubmit={handleSignUp}>
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
      ) : (
        <RegistrationUsername />
      )}
    </>
  );
};
export default Registration;
