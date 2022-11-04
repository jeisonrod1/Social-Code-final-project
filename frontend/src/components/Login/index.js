import {
  LoginContainer,
  Background,
  RightSide,
  ActionContainer,
  CredentialsContainer,
  FormContainer,
  FormCredentials,
  SignInTitle,
  InputUsernameContainer,
  CredentialIcon,
  InputUsername,
  InputPasswordContainer,
  PasswordIcon,
  InputPassword,
  SignInButton,
  SignUpContainer,
  SignUpText,
  SignUpButton,
} from "./index.styled";
import BackgroundImg from "../../images/covers/background-login.jpg";
import LoginIcon from "../../images/icons/icon/login.png";
import Password from "../../images/icons/icon/padlock.png";

const Login = () => {
  return (
    <LoginContainer>
        <Background src={BackgroundImg} />
      <RightSide>
        <ActionContainer>
          <CredentialsContainer>
            <FormContainer>
              <FormCredentials>
                <SignInTitle>Sign In</SignInTitle>
                <InputUsernameContainer>
                  <CredentialIcon src={LoginIcon} />
                  <InputUsername type="email" />
                </InputUsernameContainer>
                <InputPasswordContainer>
                  <PasswordIcon src={Password} />
                  <InputPassword type='password'/>
                </InputPasswordContainer>
              </FormCredentials>
              <SignInButton>LOGIN</SignInButton>
              <SignUpContainer>
                <SignUpText>Don't have an account?</SignUpText>
                <SignUpButton>Sign Up</SignUpButton>
              </SignUpContainer>
            </FormContainer>
          </CredentialsContainer>
        </ActionContainer>
      </RightSide>
    </LoginContainer>
  );
};
export default Login;
