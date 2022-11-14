import styled from "styled-components";
import { useNavigate, useLocation, Link } from "react-router-dom"
import logo from "../../images/logos/social_code_logo.webp"


const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 42px;
  z-index: 1000;
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
    .left-nav {
      display: flex;
      align-items: center;
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
    height: 20px;
`

// STYLED COMPONENTS -end

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <NavigationContainer>
        <div className="left-nav">
            <LogoNavigation onClick={()=>navigate("/login")} src={logo}/>
        </div>

        <div className="right-nav">
          <a
            className="plain"
            onClick={() => {
              navigate("../posts");
            }}
          >
            Posts
          </a>
          <a
            className="plain"
            onClick={() => {
              navigate("../postpage");
            }}
          >
            Find Friends
          </a>
          <a
            className="plain"
            onClick={() => {
              navigate("../editor");
            }}
          >
            Editor
          </a>
          <a
            className="plain"
            onClick={() => {
              navigate("../userprofile");
            }}
          >
            User Profile
          </a>
          <div className="orange">
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
          </div>
        </div>
      </NavigationContainer>
    </>
  );
};
export default Header;
