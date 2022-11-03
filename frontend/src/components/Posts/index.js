import styled from "styled-components";
import card1 from "../../images/restaurants/card-1.jpg";
import card2 from "../../images/restaurants/card-2.jpg";
import card3 from "../../images/restaurants/card-3.jpg";
import card4 from "../../images/restaurants/card-4.jpg";
import CardPost from "./CardPost/index.js";

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
  return (
    <>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <CardContainer>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
      </CardContainer>
    </>
  );
};
export default Posts;
