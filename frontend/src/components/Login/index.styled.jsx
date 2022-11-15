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

    :hover {
      color: ${p=>p.theme.purpleLight};
      transition: 0.1s;
      cursor: pointer;
    }

`

// FORM
export const LoginForm = styled.form`
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


export const SocialMediaIconsContainer = styled.div`
    position: absolute;
    top:0;
    width: 30px;
    left:-15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 20px;

    a {
      img {
        height: 26px;
        opacity: 0.6;

        :hover {
          cursor: pointer;
          opacity: 1;
          transition: 0.1s;
        }
      }
    }

`
