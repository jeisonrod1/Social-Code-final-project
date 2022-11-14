import styled from "styled-components";
import card1 from "../../images/restaurants/card-1.jpg";
import card2 from "../../images/restaurants/card-2.jpg";
import card3 from "../../images/restaurants/card-3.jpg";
import card4 from "../../images/restaurants/card-4.jpg";
import CardMidPost from "./CardMidPost/index.js";
import CardMidNewPost from "./CardMidNewPost/index.js";
import CardRightNav from "./CardRightNav/index.js";
import CardLeftNav from "./CardLeftNav/index.js";
import React, {useEffect, useState} from "react";
import CreatePost from "../../components/CreatePost/CreateCodePost";
import {unwrapResult} from "@reduxjs/toolkit";
import Comment from "./Comment";
import Spinner from "../Posts/Spinner/index";
import comment from "./Comment";

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
  background-color: rgba(126, 126, 126, 0.12);
  border-radius: 8px;
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

const Posts = () => {

  const [posts, setPosts] = useState([])
  const [searchParam, setSearchParam] = useState([' '])

    const handleTagReact = () => {
        setSearchParam("React")
    }
    const handleTagBackend = () => {
        setSearchParam("Backend")
    }
    const handleTagFrontend = () => {
        setSearchParam("Frontend")
    }
    const handleTagJobs = () => {
            setSearchParam("Jobs")
        }
    const handleTagMemes = () => {
            setSearchParam("Memes")
        }
    const handleTagFinalProject = () => {
            setSearchParam("Finalproject")
        }

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    },2000)
    fetchPosts()
  }, [searchParam]);

  const fetchPosts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://code-media.propulsion-learn.ch/backend/codepost/search/?search=${searchParam}`, requestOptions)
        .then(response => response.json())
        .then(result => setPosts(result))
        .catch(error => console.log('error', error));
  }
  const [loading, setLoading] = useState(true);
  if (loading){
    return <Spinner />
  }
  return (
    <>
      <RowWrapper>
        <CardContainerLeft>
          <CardLeftNav />
        </CardContainerLeft>
        <CardContainerMid>
          <CreatePost />
          <CardMidNewPost />
{ posts.length > 0 && posts.map(post => <CardMidPost post={post}/>)}

        </CardContainerMid>
        <CardContainerRight>
              <QCard>
                <h3>Channels:</h3>
                <p onClick={handleTagJobs}>#SwissJobs</p>
                <p onClick={handleTagMemes}>#Memes</p>
                <p onClick={handleTagFinalProject}>#Final Projects</p>
                <p onClick={handleTagReact}>#React.js</p>
                <p onClick={handleTagFrontend}>#Frontend</p>
                <p onClick={handleTagBackend}>#Backend</p>
            </QCard>
        </CardContainerRight>
      </RowWrapper>
    </>
  );
};
export default Posts;
