import styled from "styled-components";
import CardMidPost from "./CardMidPost/index.js";
import CardMidNewPost from "./CardMidNewPost/index.js";
import CardLeftNav from "./CardLeftNav/index.js";
import React, {useEffect, useState} from "react";
import Spinner from "../Posts/Spinner/index";
import Navigation from "../Navigation";
import Footer from "../Footer";

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

    fetch(`
https://code-media.propulsion-learn.ch/backend/codepost/search/?search=${searchParam}`, requestOptions)
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
     <Navigation />
      <RowWrapper>
        <CardContainerLeft>
          <CardLeftNav />
        </CardContainerLeft>
        <CardContainerMid>
          <CardMidNewPost />
        { posts.length > 0 && posts.map(post => <CardMidPost key={post.id} post={post}/>)}

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
      <Footer />
    </>
  );
};
export default Posts;
