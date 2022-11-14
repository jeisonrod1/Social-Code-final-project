import styled, { keyframes } from "styled-components";
import poster from "../../images/posters/poster1.jpeg"

// ANIMATIONS:
export const posterMove = keyframes`
    from {transform: translateX(0)}
    to {background-position: 40%}
`

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white 3px;
    position: relative;
`

export const LeftContainer = styled.div`
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-image: linear-gradient(78deg, #000000a5, #04020557), url(${poster});
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${posterMove} 7s linear infinite;
`;

export const RightContainer = styled.div`
    height: 100vh;
    width: 60%;
    display: flex;
    background: #1a1a1a;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

`;

export const LogoNavigationLogin = styled.img`
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

export const Slogan = styled.h1`
    position: absolute;
    height: 100px;
    width: 50%;
    bottom: 20%;
    right: 2%;
    color: white;
    font-size: 50px;
    font-weight: normal;
    text-align: right;
    font-family: 'Encode Sans SC', sans-serif;
    line-height: 50px;

    b {
      color: ${p=>p.theme.purpleLight};
    }

`

export const InvitationContainer = styled.p`
    font-family: 'Encode Sans SC', sans-serif;
    font-size: ${p=>p.theme.fontSizeS};
    color: white;
    position: absolute;
    bottom: 20%;
`

// FORM
export const SignInForm = styled.form`
    border: solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 400px;

    h2 {
      font-family: 'Encode Sans SC', sans-serif;
      font-size: ${p=>p.theme.fontSizeXL};
      color: white;
    }

    label {
      font-size: ${p=>p.theme.fontSizeS};
      display: flex;
      flex-direction: column;
      height: 40px;
    }

    input {
        height: 30px;
        width: 200px;
        border: none;
        border-bottom: solid white 2px;
        color: white;
        padding: 10px;

        border-radius: 0;
        ::placeholder {
          color: #5e5e5e;
        }
    }

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

export const SignInTitle = styled.div`
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 25px 0 40px;
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




