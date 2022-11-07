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

const Login = () => {
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
          <SignInForm>
            <SignInTitle>Sign in</SignInTitle>
            <Inputs>
              <EmailLabel src={LoginIcon} />
              <EmailInput placeholder="enter your email" type="email" />
              <PasswordLabel src={PasswordIcon} />
              <PasswordInput
                placeholder="enter your password"
                type="password"
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
