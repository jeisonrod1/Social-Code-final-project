import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  update_email,
  update_password,
  update_token,
  update_username,
  update_firstName,
  update_lastName,
  update_phone,
  update_location,
  update_aboutMe,
  update_points,
  update_company,
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
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

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

const RegistrationValidation = () => {
  const dispatch = useDispatch();

  const email = useSelector(state => state.loginData.email);
  const username = useSelector(state => state.loginData.username);
  const password = useSelector(state => state.loginData.password);
  const token = useSelector(state => state.loginData.token);

  const first_name = useSelector(state => state.loginData.first_name);
  const last_name = useSelector(state => state.loginData.last_name);
  const location = useSelector(state => state.loginData.location);
  const phone = useSelector(state => state.loginData.phone);
  const about_me = useSelector(state => state.loginData.about_me);
  const points = useSelector(state => state.loginData.points);
  const company = useSelector(state => state.loginData.company);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [showPassword2, setShowPassword2] = useState("");

  const [code, setCode] = useState("");
  const [emailState, setEmailState] = useState("");
  const [tokenState, setTokenState] = useState("");
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordState2, setPasswordState2] = useState("");
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [aboutMeState, setAbaoutMeState] = useState("");
  const [pointsState, setPointsState] = useState("");
  const [companyState, setCompanyState] = useState("");
  const navigate = useNavigate();
  // makes the "Email" and Username Input controlled. Sends the input to the Login-Redux-Slice.
  const handleEmail = e => {
    dispatch(update_email(e.target.value));
    setEmailState(e.target.value);
  };
  const handleUsername = e => {
    dispatch(update_username(e.target.value));
    setUsernameState(e.target.value);
  };
  // Controlling the other inputs with local state
  const handleCodeChange = e => {
    setCode(e.target.value);
  };
  const handlePasswordChange = e => {
    dispatch(update_password(e.target.value));
    setPasswordState(e.target.value);
  };
  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
    setPasswordState2(e.target.value);
  };
  const handleFirstNameChange = e => {
    dispatch(update_firstName(e.target.value));
    setFirstNameState(e.target.value);
  };
  const handleLastNameChange = e => {
    dispatch(update_lastName(e.target.value));
    setLastNameState(e.target.value);
  };
  const handlePhone = e => {
    dispatch(update_phone(e.target.value));
    setPhoneState(e.target.value);
  };
  const handleLocation = e => {
    dispatch(update_location(e.target.value));
    setLocationState(e.target.value);
  };
  const handleAboutMe = e => {
    dispatch(update_aboutMe(e.target.value));
    setAbaoutMeState(e.target.value);
  };
  const handlePoints = e => {
    dispatch(update_points(e.target.value));
    setPointsState(e.target.value);
  };

  const handleCompany = e => {
    dispatch(update_company(e.target.value));
    setCompanyState(e.target.value);
  };

  const handleAvatar = e => {
    console.log("help");
  };

  const handleSignUp = e => {
    e.preventDefault();
    const url =
      "https://code-media.propulsion-learn.ch/backend/registration/validation/";
    //  "http://localhost:8001/backend/registration/validation/";
    const jsBody = {
      email: email,
      username: username,
      code: code,
      password: password,
      password_confirm: passwordConfirm,
      first_name: first_name,
      last_name: last_name,
      location: location,
      phone: phone,
      company: company,
      points: points,
      about: about_me,
    };

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jsBody),
    };

    fetch(url, config)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          navigate("/login");
          console.log("Good");
        } else {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log("error: " + err));
  };

  return (
    <>
      <RegistrationPageContainer>
        <SignInForm
          style={{ width: "70%", height: "100%" }}
          onSubmit={handleSignUp}
        >
          <SignInTitle>Sign Up</SignInTitle>
          <Inputs type={"text"} onChange={handleAvatar}>
            <p> Avatar here </p>
          </Inputs>
          <LoginContainer>
            <LeftSide>
              <Inputs type={"text"} value={code} onChange={handleCodeChange}>
                <EmailLabel />
                <EmailInput placeholder="enter your code" />
              </Inputs>
              <Inputs
                type={"email"}
                value={email ? { email } : { emailState }}
                onChange={handleEmail}
              >
                <EmailLabel />
                <EmailInput placeholder="enter your email" />
              </Inputs>
              <Inputs
                type={"text"}
                value={first_name ? { first_name } : { firstNameState }}
                onChange={handleFirstNameChange}
              >
                <EmailLabel />
                <EmailInput placeholder="enter your first name" />
              </Inputs>
              <Inputs
                type={"text"}
                value={last_name ? last_name : lastNameState}
                onChange={handleLastNameChange}
              >
                <EmailLabel />
                <EmailInput placeholder="enter your last name" />
              </Inputs>
              <Inputs
                type={"text"}
                value={username ? username : usernameState}
                onChange={handleUsername}
              >
                <EmailLabel />
                <EmailInput placeholder="enter your username" />
              </Inputs>
            </LeftSide>
            <RightSide>
              <Inputs
                value={password ? { password } : { passwordState }}
                onChange={handlePasswordChange}
              >
                <PasswordLabel />
                <PasswordInput
                  onChange={handlePasswordChange}
                  placeholder="set your password"
                  type={showPassword ? "text" : "password"}
                />
                <input
                  type="checkbox"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </Inputs>
              <Inputs value={passwordConfirm} onChange={handlePasswordConfirm}>
                <PasswordLabel />
                <PasswordInput
                  onChange={handlePasswordConfirm}
                  placeholder="set your password"
                  type={showPassword2 ? "text" : "password"}
                />
                <input
                  type="checkbox"
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              </Inputs>
              <Inputs
                type={"text"}
                value={location ? { location } : { locationState }}
                onChange={handleLocation}
              >
                <EmailLabel />
                <EmailInput placeholder="enter your location" />
              </Inputs>
              <Inputs
                type={"tel"}
                value={phone ? { phone } : { phoneState }}
                onChange={handlePhone}
              >
                <EmailLabel />
                <EmailInput type="tel" placeholder="enter your phone" />
              </Inputs>
              <Inputs
                type={"text"}
                value={company ? { company } : { companyState }}
                onChange={handleCompany}
              >
                <EmailLabel />
                <EmailInput placeholder="enter your company" />
              </Inputs>
              <Inputs
                type={"text"}
                value={about_me ? { about_me } : { aboutMeState }}
                height="200px"
                style={{ height: "90px" }}
                onChange={handleAboutMe}
              >
                <EmailLabel />
                <EmailInput placeholder="enter About info" />
              </Inputs>
            </RightSide>
          </LoginContainer>
          <button
            onClick={() => navigate("/registration")}
            style={{ float: "left", marginLeft: "0px" }}
          >
            Return
          </button>
          <button
            style={{
              float: "right",
              marginRight: "0px",
            }}
          >
            Sign Up
          </button>
        </SignInForm>
      </RegistrationPageContainer>
    </>
  );
};

export default RegistrationValidation;
