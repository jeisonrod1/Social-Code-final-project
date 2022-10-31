import React from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";


// STYLED COMPONENTS -start

const Card_ = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  width: 880px;
  height: 400px;
  background-color: #1e1f26;
  p {
    margin: 8px;
    font-size: 12px;
  }
  .star {
    width: 60%;
  }
  img {
    width: 100px;
  }
  h5 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
`;

// STYLED COMPONENTS -end

const Card_restaurant = () => {
  return (
    <Card_>
      <h5>Restaurant Name</h5>
      <p>Address</p>
      <div className="img">
        <img src={card1}></img>
      </div>
    </Card_>
  );
};
export default Card_restaurant;
