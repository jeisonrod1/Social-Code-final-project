import styled from "styled-components";
import React, { Component } from 'react'
import logo_fb from "../../images/icons/svgs/facebook.svg";
import some_audio_source from "../../images/audio/audio-crack.mp3";
import logo_twit from "../../images/icons/svgs/twitter.svg";
import logo_goog from "../../images/icons/svgs/googleplus.svg";
import logo_insta from "../../images/icons/svgs/instagram.svg";

import "./pacman.css";

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
    height: 24px;
    margin: 8px;
    filter: invert(100);
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
        <div className="pacman"></div>
          <div className="dot"></div>
        {/*<PlayButton src={some_audio_source}/>*/}
        <div>
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
