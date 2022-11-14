import React from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";
import heart from "../../../images/icons/svgs/heart.svg";
import share from "../../../images/icons/svgs/share.svg";
import meme from "../../../images/memes/ten-sec.jpg";

// STYLED COMPONENTS -start

const QCard = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  width: 600px;
  height: 100%;
  background-color: #1e1f26;
  display: flex;
  justify-content: start;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #505263;
  border-radius: 8px;
  .wrapper {
    display: flex;
  }
  spac p {
    margin: 8px;
    font-size: 12px;
  }
  .image {
    width: 150px;
    margin: 16px;
  }
  p,
  h5 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
  .left {
    justify-content: flex-start;
    p {
      margin: 16px 0 0 16px;
    }
    h5 {
      background-color: #492d71;
      border-radius: 20px;
      padding: 8px 16px;
      margin: 16px 0 16px 16px;
      display: inline-flex;
    }
  }
  .right {
    justify-content: flex-end;
    text-align: right;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  border-top: 1px dashed lightgrey;
  padding-top: 16px;
  button {
    background-color: #492d71;
    color: white;
    padding: 6px;
    border-radius: 16px;
  }
  svg {
    fill: white;
  }
  img {
    margin-right: 8px;
    height: 20px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

// STYLED COMPONENTS -end

const CardPost = () => {
  return (
    <QCard>
      <div className="wrapper">
        <div className="left">
          <p>👾 Is JCenter down permanently (31 Oct)?</p>
          <div className="tags">
            <h5>javascript</h5>
            <h5>react</h5>
          </div>
        </div>
        <div className="right">
          <h5>User123</h5>
          <h5>70 votes</h5>
          <h5>17 answers</h5>
          <h5>15k views </h5>
        </div>
      </div>
      <p>This is a very usefull code snippet: </p>
      <code>

      </code>
      <img className="image" src={meme}></img>
      <p>Comments:</p>
      <p>Peter3202:</p>
      <p>👾 Is JCenter down permanently (31 Oct)?</p>
      <p>Comment2:</p>
      <p>👾 Is JCenter down permanently (31 Oct)?</p>
      <p>expand comments ⏬</p>
      <SocialButtons>
        <div>
          <img src={heart}></img>
          <button>Like</button>
        </div>
        <div>
          <img src={share}></img>
          <button>Share</button>
        </div>
        <span>[ 34 ] Likes</span>
      </SocialButtons>
    </QCard>
  );
};
export default CardPost;
