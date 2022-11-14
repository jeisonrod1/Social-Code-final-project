import styled from "styled-components";
import card1 from "../../images/restaurants/card-1.jpg";
import card2 from "../../images/restaurants/card-2.jpg";
import card3 from "../../images/restaurants/card-3.jpg";
import card4 from "../../images/restaurants/card-4.jpg";
import CardMidPost from "./CardMidPost/index.js";
import CardMidNewPost from "./CardMidNewPost/index.js";
import CardRightNav from "./CardRightNav/index.js";
import CardLeftNav from "./CardLeftNav/index.js";
import {useEffect} from "react";

// STYLED COMPONENTS -start

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  margin: auto;
  padding-top: 10px;
  span,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 8px 0 8px 8px;
  }
`;

const CardContainerLeft = styled.div`
  width: 180px;
  height: 100%;
  position: sticky;
  top: 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 62px;
`;

const CardContainerMid = styled.div`
  width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 62px;
`;

const CardContainerRight = styled.div`
  width: 220px;
  height: 100%;
  position: sticky;
  top: 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 62px;
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
  useEffect(() => {
    fetchPosts()
  });

  const fetchPosts =() => {
      const myHeaders = new Headers();

        const myInit = {
             method: 'GET',
            headers: myHeaders
    };

    fetch('http://localhost:8001/backend/codepost/', myInit)
    .then(response => response.json())
    .then(json => console.log(json))


  }

  return (
    <>
      <RowWrapper>
        <CardContainerLeft>
          <CardLeftNav />
        </CardContainerLeft>
        <CardContainerMid>
          <CardMidNewPost />
          <CardMidPost />
        </CardContainerMid>
        <CardContainerRight>
          <CardRightNav />
        </CardContainerRight>
      </RowWrapper>
    </>
  );
};
export default Posts;
