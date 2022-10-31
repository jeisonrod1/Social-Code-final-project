import styled from "styled-components";
import logo_fb from "../../images/icons/svgs/facebook.svg";
import logo_twit from "../../images/icons/svgs/twitter.svg";
import logo_goog from "../../images/icons/svgs/googleplus.svg";
import logo_insta from "../../images/icons/svgs/instagram.svg";

// STYLED COMPONENTS -start

const HeaderComponent = styled.div`
  display: flex;
  background-color: #1e1f26;
  position: fixed;
  box-shadow: 6px 6px 13px 0px;
  width: 100%;
  bottom: 0;
  height: 42px;
  a {
    font-size: 12px;
  }
  img {
    height: 14px;
    margin: 16px;
  }
  .left-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-left: 16px;
    .plain {
      padding: 8px;
      margin-right: 32px;
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 16px;
    img {
      height: 24px;
      margin: 5px;
    }
  }
`;

// STYLED COMPONENTS -end

const Footer = () => {
  return (
    <>
      <HeaderComponent>
        <div className="left-nav">
          <a className="plain">Abous Us</a>
          <a className="plain">Press</a>
          <a className="plain">Blog</a>
          <a className="plain">iOS</a>
          <a className="plain">Android</a>
        </div>
        <div className="right-nav">
          <img src={logo_fb}></img>
          <img src={logo_twit}></img>
          <img src={logo_goog}></img>
          <img src={logo_insta}></img>
        </div>
      </HeaderComponent>
    </>
  );
};

export default Footer;
