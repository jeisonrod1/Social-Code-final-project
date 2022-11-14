import React from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  width: 880px;
  height: 120px;
  background-color: #1e1f26;
  display: flex;
  justify-content: space-between;
  border: 1px solid #505263;
  border-radius: 8px;
  spac p {
    margin: 8px;
    font-size: 12px;
  }
  .star {
    width: 60%;
  }
  img {
    width: 100px;
  }
  p, h5 {
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
  .tags {

  }
  .right {
    justify-content: flex-end;
    text-align: right;
  }
`;

// STYLED COMPONENTS -end

const Card_restaurant = () => {
  return (
    <Card_>
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
    </Card_>
  );
};
export default Card_restaurant;
