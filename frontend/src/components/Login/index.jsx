import {
  LoginContainer,
  Slogan,
  SignInForm,
  RightBottomContainer,
  SocialMediaIcons,
  FacebookLink,
  FacebookIcon,
  TwitterLink,
  TwitterIcon,
  InstagramLink,
  InstagramIcon,
  RightContainer,
  LeftContainer,
  LogoNavigationLogin,
  InvitationContainer
} from "./index.styled";
import IconFB from "../../images/icons/icon/facebook.png"
import IconTW from "../../images/icons/icon/twitter.png"
import IconIG from "../../images/icons/icon/instagram.png"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from "../../images/logos/social_code_logo.webp"


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
        <Slogan>Connecting <b>developers</b> around the globe</Slogan>
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

        <SignInForm onSubmit={handleSubmit}>
          <h2>Hello, SocialCoder</h2>
          
            <label>
              email
              <input placeholder="enter your email" type="email" onChange={handleEmailChange}/>
            </label>
          
            <label>
              password
              <input
                placeholder="enter your password"
                type="password"
                onChange={handlePasswordChange}
              />
            </label>
        
          <button>Sign in</button>
        </SignInForm>


        <InvitationContainer>
          No Account? Do you have the code?
        </InvitationContainer>

     
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
