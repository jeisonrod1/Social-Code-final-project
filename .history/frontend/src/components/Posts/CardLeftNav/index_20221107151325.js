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
  width: 180px;
  position: relative;
  top: 0;
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

const CardRightNav = () => {
  return (
    <QCard>
      <p>#Comments:</p>
      <p>#SwissJobs</p>
      <p>#Memes</p>
      <p>#Final Projects</p>
      <p>#Sit Parties</p>
      <p>#Halloween</p>
      <p>#Interview Prep</p>
    </QCard>
  );
};
export default CardRightNav;
