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
    bottom: 10%;
`

// FORM
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 400px;
    border:solid yellow;

    h2 {
      font-family: 'Encode Sans SC', sans-serif;
      font-size: ${p=>p.theme.fontSizeXL};
      color: white;
      margin-bottom: 50px;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;

      h3 {
        margin: 0;
        font-size: ${p=>p.theme.fontSizeXS};
        font-weight: normal;
      }

      input {
          height: 20px;
          width: 200px;
          border: none;
          border-bottom: solid white 1px;
          color: white;
          padding: 4px;
          border-radius: 0;
          font-size: ${p=>p.theme.fontSizeM};
          margin-bottom: 16px;

          ::placeholder {
            color: #5e5e5e;
          }

          :focus {
            outline: none;
            border-bottom: solid 2px ${p=>p.theme.purpleLight};
            font-weight: bold;
          }
      }
    }

    button {
      background: ${p=>p.theme.purpleLight};
      color: white;
      font-size: ${p=>p.theme.fontSizeM};
      width: 140px;
      height: 36px;
      border-radius: 4px;
      border: none;
      margin-top: 26px;

      :hover {
        cursor: pointer;
        font-weight: bold;
      }
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




