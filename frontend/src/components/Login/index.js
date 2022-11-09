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
  RightBottomContainer,
  SocialMediaIcons,
  FacebookLink,
  FacebookIcon,
  TwitterLink,
  TwitterIcon,
  InstagramLink,
  InstagramIcon
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

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://code-media.propulsion-learn.ch/backend/auth/token/"
        const tokenFromLs = localStorage.getItem("auth")
        const tokenJsObject = JSON.parse(tokenFromLs)

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

        fetch(url, config)
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                console.log("fetch worked")
                const json = response.json();
                return json
            }
            else {
                console.log(response.json())
            }
        })
        .then(data => { setToken(data.access)
            console.log(token)});
    }

     useEffect(() => {
        const jsObject = {
            socialToken: token
        }
        if (token) {
            localStorage.setItem("auth", JSON.stringify(jsObject));
            console.log("the token was stored to local storage");
            navigate("/")
        }
      }, [token]);



  return (
    <LoginContainer>
      <LeftSide>
        <LeftBackground src={LeftBackgroundImg} />
        <LeftTopContainer>
          <AppName>Social Code</AppName>
          <Slogan>Connecting developers around the globe</Slogan>
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
        <SocialCodeLogo src={SocialCode} />
      </LeftSide>
      <RightSide>
        <RightBackground src={RightBackgroundImg} />
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
      </RightSide>
    </LoginContainer>
  );
};
export default Login;
