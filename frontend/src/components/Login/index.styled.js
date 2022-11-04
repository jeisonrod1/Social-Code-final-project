import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Background = styled.img`
  position: absolute;
  padding-top: 40px;
  height: 100vh;
`;
export const RightSide = styled.div`
  width: 100%;
  padding-top: 120px;
  position: relative;
`;
export const ActionContainer = styled.div`
  width: 380px;
  height: 580px;
  background: #313239;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  
`;
export const CredentialsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`;
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 30px;
`;
export const FormCredentials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
export const SignInTitle = styled.h2`
  text-align: center;
  padding: 30px 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
export const InputUsernameContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid #ebebeb;
  margin: 0 auto;
  padding-bottom: 8px;
`;
export const CredentialIcon = styled.img`
  width: 25px;
  position: relative;
`;
export const InputUsername = styled.input`
  width: 100%;
  outline: none;
  background: none;
  border: none;
  font-size: 18px;
  color: white;
  letter-spacing: 0.25px;
  font-family: Arial, sans-serif;
`;
export const InputPasswordContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid #ebebeb;
  margin: 0 auto;
  padding-bottom: 8px;

`;
export const PasswordIcon = styled.img`
  width: 25px;
  position: relative;
`;
export const InputPassword = styled.input`
  width: 100%;
  outline: none;
  background: none;
  border: none;
  font-size: 18px;
  color: white;
  letter-spacing: 2.5px;
`;

export const SignInButton = styled.button`
  width: 75%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 10px;
  border: none;
  letter-spacing:.5px;
  font-weight: 500;
  cursor: pointer;
`;
export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const SignUpText = styled.p``;
export const SignUpButton = styled.button`
  border: none;
  background: none;
  color: #fff;
  letter-spacing:.5px;
  font-size: 15px;
  cursor: pointer;

`;
