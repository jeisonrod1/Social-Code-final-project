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
  padding: 8px 8px 32px 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #5052632e;
  border-radius: 8px;
  box-shadow: 0px 0px 25px #af93d65e;

  .wrapper {
    display: flex;
  }
  .image {
    width: 150px;
    margin: 16px;
  }
  p,
  h5,
  h3 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
  p:hover {
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;
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
      <h3>Channels:</h3>
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
