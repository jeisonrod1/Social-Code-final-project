import styled from "styled-components";

export const LoginContainer = styled.div`
  color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: "Monaco";
  border: solid white 3px;
`

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LeftBackground = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const RightBackground = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const LeftTopContainer = styled.div`
  position: relative;
  scale: 0.9;
`;

export const AppName = styled.p`
  padding: 60px 0 0;
  font-size: 4.5em;
  text-align: center;
  color: #fff;
  scale: 0.9;
`;
export const Slogan = styled.p`
  padding: 20px 60px 0;
  font-size: 1.8em;
  text-align: center;
  color: #fff;
  scale: 0.9;
`;
export const LeftBottomContainer = styled.div`
  position: absolute;
  width: 50%;
`;
export const ReferralContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 100px;
`;
export const ReferralText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ReferralTitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const ReferralForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const ReferralInput = styled.input`
  width: 200px;
  padding: 5px 8px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 20px;
`;
export const SocialCodeLogo = styled.img`
  width: 20%;
  position: relative;
  top: 50px;
  margin: 0 auto;
`;
export const RightTopContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  bottom: 20px;
  right: 60px;
  scale: 1.1;
`;
export const SignInText = styled.button`
  border: none;
  background: none;
  color: white;
  font-family: "Monaco";
  cursor: pointer;
`;
export const SignInIcon = styled.img`
  scale: 0.8;
`;
export const RightMiddleContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;
export const SignInForm = styled.form`
  text-align: center;
  width: 350px;
  height: 480px;
  background-color: #48367e;
  border-radius: 8px;
  scale: 0.9;

  button {
    margin-top: 75px;
    width: 180px;
    padding: 8px 12px;
    font-size: 18px;
    font-weight: 550;
    color: black;
    border-radius: 12px;
    border: none;
    cursor: pointer;
  }
`;
export const SignInTitle = styled.div`
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 25px 0 40px;
`;
export const Inputs = styled.div`
  padding: 25px;
`;
export const EmailLabel = styled.img`
  position: relative;
  padding-right: 25px;
  top: 35px;
  left: 125px;
  z-index: 100;
`;
export const EmailInput = styled.input`
  width: 80%;
  height: 22px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 15px;
  position: relative;
  top: -4px;
`;
export const PasswordLabel = styled.img`
  position: relative;
  padding-right: 25px;
  top: 35px;
  left: 125px;
  z-index: 100;
`;
export const PasswordInput = styled.input`
  width: 80%;
  height: 22px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 15px;
  position: relative;
  top: -4px;
`;
export const RightBottomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
export const SocialMediaIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const FacebookLink = styled.a``;
export const FacebookIcon = styled.img`
  width: 20px;
`;

export const TwitterLink = styled.a``;
export const TwitterIcon = styled.img`
  width: 20px;
`;
export const InstagramLink = styled.a``;
export const InstagramIcon = styled.img`
  width: 20px;
`;
