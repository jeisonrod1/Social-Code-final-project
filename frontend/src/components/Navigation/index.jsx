import styled from "styled-components";
import { useNavigate, useLocation, Link } from "react-router-dom"
import logo from "../../images/logos/social_code_logo.webp"
import user_avatar from "../../images/users/profile-face.png"



const NavigationContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 2%;
    border: solid red;

    .left {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      border: solid yellow;
    }
  
    .right {
      border: solid green;
      height: 100%;
      width: fit-content;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }


  .light & {
    background-color: #e2e2e2;
    transition: all 1s;
    box-shadow: -7px -7px 23px 7px rgba(180, 168, 255, 0.63);
  }
  .dark & {
    background-color: #2e3138;
    transition: all 1s;
    box-shadow: -7px -7px 23px 6px rgba(140, 0, 0, 0.63);
  }
  a {
    font-size: 12px;
    &:hover {
      background-color: #4e4e4e70;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  .right-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 16px;
    .orange {
      display: flex;
      color: white;
      background-color: #4e4e4e;
      padding: 8px 0 8px 0;
      border-radius: 20px;
      .login,
      .signup {
        margin: 0 16px 0 16px;
        font-size: 10px;
      }
      .line {
        border-right: 1px solid white;
        margin-top: -8px;
        margin-bottom: -8px;
      }
    }
    .plain {
      padding: 8px;
      margin-right: 32px;
    }
  }
`;

const LogoNavigation = styled.img`
    height: 16px;

    :hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: ${p=>p.theme.transitionShort};
    }
`

const NavigationItem = styled.div`
    height: 100%;
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px transparent solid;
    color: white;
    font-weight: bold;
    font-size: ${p=>p.theme.fontSizeS};
    margin-right: 2%;

    img {
      height: 27px;
      width: 27px;
      border-radius: 50%;
    }

    :hover {
      cursor: pointer;
      background: #2020202a;
      transition: ${p =>p.theme.transitionShort};
      font-weight: ${p =>p.theme.fontWeightBold};
      border-bottom: 2px solid ${p =>p.theme.purpleLight};
    }
`

const Navigation = () => {
  const navigate = useNavigate()


  return (
      <NavigationContainer>
        <div class="left">
            <LogoNavigation onClick={()=> navigate("/login")} src={logo}/>
        </div>

        <div class="right">
          <NavigationItem onClick={() => navigate("/posts")}>Posts</NavigationItem>
          <NavigationItem onClick={() => navigate("/postpage")}>Friends</NavigationItem>
          <NavigationItem onClick={() => navigate("/editor")}>Editor</NavigationItem>
          <NavigationItem onClick={() => navigate("/userProfile")}><img src={user_avatar}/></NavigationItem>
        </div>

          {/* <div className="orange">
            <a
              className="signup"
              onClick={() => {
                navigate("../registration");
              }}
            >
              SIGNUP
            </a>
            <a className="line"></a>
            <a
              className="login"
              onClick={() => {
                navigate("../login");
              }}
            >
              LOGIN
            </a>
          </div> */}
  
      </NavigationContainer>
  )
}

export default Navigation;
