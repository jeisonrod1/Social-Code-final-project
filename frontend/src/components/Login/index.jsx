import {
  LoginContainer,
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
  RightBottomContainer,
  SocialMediaIcons,
  FacebookLink,
  FacebookIcon,
  TwitterLink,
  TwitterIcon,
  InstagramLink,
  InstagramIcon,
  RightContainer,
  LeftContainer
} from "./index.styled";
import LeftBackgroundImg from "../../images/covers/background-login.jpg";
import RightBackgroundImg from "../../images/covers/right-background.jpeg";
import LoginIcon from "../../images/icons/icon/login.png";
import PasswordIcon from "../../images/icons/icon/padlock.png";
import SocialCode from "../../images/icons/svgs/logo_socialcode.jpg"
import IconFB from "../../images/icons/icon/facebook.png"
import IconTW from "../../images/icons/icon/twitter.png"
import IconIG from "../../images/icons/icon/instagram.png"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import logo from "../../images/logos/social_code_logo.webp"


const LogoNavigationLogin = styled.img`
    height: 20px;
    position: absolute;
    top: 3%;
    left: 3%;

    :hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: ${p=>p.theme.transitionShort};
    }
`

const AppSlogan = styled.h1`
    position: absolute;
    height: 100px;
    width: 50%;
    bottom: 20%;
    right: 2%;
    color: white;
    font-size: ${p=>p.theme.fontSizeXXXL};
    border: solid yellow;
    font-weight: normal;
    text-align: right;
    
`

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const navigate = useNavigate()


    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)


    const handleSubmit = e => {
        e.preventDefault()

        const jsBody = {
            "email": email,
            "password": password,
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody)
        }

      fetch("https://code-media.propulsion-learn.ch/backend/auth/token/", config)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("auth", data.access)
                setToken(data.access)
            })
            .catch(error => console.log(error))
      }

      useEffect(() => {
        if (token) {
            localStorage.setItem("auth",`Bearer ${token}`);
            console.log("the token was stored to local storage");
            navigate("/")
        }
      }, [token]);


  return (
    <LoginContainer>

      <LeftContainer>
        <LogoNavigationLogin src={logo}/>
        <AppSlogan>Connecting developers around the globe</AppSlogan>
        {/* <LeftBackground src={LeftBackgroundImg} />
        <LeftTopContainer>
          <AppName>Social Code</AppName>
          <Slogan></Slogan>
        </LeftTopContainer>
        <LeftBottomContainer>
          <ReferralContainer>
            <ReferralText>New here?</ReferralText>
            <ReferralTitle>Enter your referral code</ReferralTitle>
            <ReferralForm>
              <ReferralInput />
            </ReferralForm>
          </ReferralContainer>
        </LeftBottomContainer>
        <SocialCodeLogo src={SocialCode} /> */}
      </LeftContainer>

      <RightContainer>
        <RightTopContainer>
          <SignInText>Sign in</SignInText>
          <SignInIcon src={LoginIcon} />
        </RightTopContainer>
        <RightMiddleContainer>
          <SignInForm onSubmit={handleSubmit}>
            <SignInTitle>Sign in</SignInTitle>
            <Inputs>
              <EmailLabel src={LoginIcon} />
              <EmailInput placeholder="enter your email" type="email" onChange={handleEmailChange}/>
              <PasswordLabel src={PasswordIcon} />
              <PasswordInput
                placeholder="enter your password"
                type="password"
                onChange={handlePasswordChange}
              />

            </Inputs>
            <button>Sign in</button>
          </SignInForm>
        </RightMiddleContainer>
        <RightBottomContainer>
          <SocialMediaIcons>
            <FacebookLink href="https://www.facebook.com">
              <FacebookIcon src={IconFB} />
            </FacebookLink>
            <TwitterLink href="https://www.twitter.com">
              <TwitterIcon src={IconTW}/>
            </TwitterLink>
            <InstagramLink href="https://www.instagram.com">
              <InstagramIcon src={IconIG}/>
            </InstagramLink>
          </SocialMediaIcons>
        </RightBottomContainer>
      </RightContainer>

    </LoginContainer>
  );
};
export default Login;
