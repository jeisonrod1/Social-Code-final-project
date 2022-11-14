import styled from "styled-components";
import { useEffect, useState } from "react";
import card1 from "../../images/restaurants/card-1.jpg";
import card2 from "../../images/restaurants/card-2.jpg";
import card3 from "../../images/restaurants/card-3.jpg";
import card4 from "../../images/restaurants/card-4.jpg";
import Card_restaurant from "./Card_restaurant/index.js";
import Card_review from "./Card_reviews/index.js";
import Card_user from "./Card_users/index.js";

// STYLED COMPONENTS -start

const CardContainer = styled.div`
  width: 870px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 26px;
`;

const Navbar = styled.div`
  margin: 0 auto;
  padding-top: 96px;
  display: flex;
  justify-content: center;
  p {
    padding: 8px 32px 8px 32px;
    margin: 8px;
    border-bottom: 1px solid lightgrey;
    &:hover {
      border-bottom: 4px solid #7931e4;
      margin-bottom: 4px;
      transition: 0.1s all;
    }
  }
`;

// STYLED COMPONENTS -end


// STYLED COMPONENTS -start

const QCard = styled.div`
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

const NavTest = () => {
  const [active, setActive] = useState("Container_restau");
  const [restaurants, setRestaurants] = useState([])
  return (
    <>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <Navbar>
        <p onClick={() => setActive("Container_restau")}>Newest</p>
        <p onClick={() => setActive("Container_review")}>Most liked</p>
        <p onClick={() => setActive("Container_users")}>Biggest projects</p>     
      </Navbar>
      <CardContainer>
        {active == "Container_restau" && <Card_restaurant />} 
        {active == "Container_review" && <Card_review />}
        {active == "Container_users" && <Card_user />}
      </CardContainer>

      <CardContainer>
        <QCard>
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
        </QCard>
      </CardContainer>
    </>
  );
};
export default NavTest;
