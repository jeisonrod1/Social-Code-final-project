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

const Posts = () => {
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
    </>
  );
};
export default Posts;
