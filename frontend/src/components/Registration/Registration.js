import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update_email } from "../../redux/slices/login-slice";

import styled from "styled-components";





import LoginIcon from "../../images/icons/icon/login.png";

import { useNavigate } from "react-router";
import {EmailInput, EmailLabel, Inputs, SignInForm, SignInTitle} from "./registration.Styles";

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
  const email = useSelector(state => state.loginData.email);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const [tokenLS, setTokenLS] = useState(localStorage.getItem("auth"));

  // User Infos
  const [Username, setUsername] = useState("");
  const [emailState, setEmailState] = useState("");
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
    setEmailState(e.target.value);
  };
  const navigate = useNavigate();

  // Handle SUBMIT (SungUp)
  // useEffect = (() => {})
  const handleSignUp = e => {
    e.preventDefault();
    // console.log(e);
    const url = "https://code-media.propulsion-learn.ch/backend/registration/";
    //  "http://localhost:8001/backend/registration/";
    const jsBody = {
      email: email,
    };
    // console.log(email);

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jsBody),
    };

    fetch(url, config)
      .then(response => {
        console.log("code successfully sent, response: " + response);
        if (response.status === 200) {
          console.log("code successfully sent, response: " + response);
          navigate("/registration/validation");
          setSuccess(true);
          console.log("1. " + success);
        } else {
          setSuccess(false);
          return response.json();
        }
      })
      .then(data => console.log(data))
      .catch(err => console.log("Error" + err));
  };
  return (
    <>
      <RegistrationPageContainer>
        <SignInForm
          onSubmit={handleSignUp}
          // onChange={() => {
          //   success
          //     ? navigate("/registration/validation")
          //     : navigate("/registration/");
          // }}
        >
          <SignInTitle>Sign Up</SignInTitle>
          <Inputs>
            <EmailLabel src={LoginIcon} />
            <EmailInput
              placeholder="enter your email"
              type="email"
              onChange={handleEmailChange}
            />
          </Inputs>
          {success ? (
            <button>We've sent an email to {emailState}</button>
          ) : (
            <button>Sign Up</button>
          )}
          <button
            style={{ fontSize: "10px", color: "white" }}
            onClick={() => navigate("/registration/validation")}
          >
            already message sent?
          </button>
        </SignInForm>
      </RegistrationPageContainer>
    </>
  );
};
export default Registration;
