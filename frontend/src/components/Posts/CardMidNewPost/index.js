import React, {useEffect} from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";
import heart from "../../../images/icons/svgs/heart.svg";
import share from "../../../images/icons/svgs/share.svg";
import meme from "../../../images/memes/ten-sec.jpg";
import profile1 from "../../../images/users/profile1.jpg";
import CreatePost from "../../CreatePost/CreateCodePost";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {ButtonsContainer, ExpandPostButtons} from "./stlyed";

// STYLED COMPONENTS -start

const QCard = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: start;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #5052632e;
  background-color: rgb(85 72 174 / 54%);
    border-radius: 8px;
    box-shadow: 0px 0px 25px #af93d65e;
  .wrapper {
    display: flex;
  }
  .image {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 16px;
  }
  p,
  h5 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
  .body {
    display: flex;
    align-items: center;
    input{
      border: 1px solid #d3d3d3;
      color: #fff;
      input[placeholder="What's up!"] {
           color: #fff;
           cursor: pointer;
         }
    }
  }
  input[type=text] {
  height: 60px;
  width: 310px;
  padding-left: 8px;
  margin-left: 8px;
  color: #212121 !important;
    
  }
     input[type=file]::file-selector-button {
          border: none;
          background: rgba(126,126,126,0.12);
          color: #fff;
          cursor: pointer;
          height: 100%;
          transition: background .2s ease-in-out;
        }
        
  input[type="file"] {
    width: 210px;
  }
  .post-button{
    display: flex;
    padding-left:26px;
    font-size: 14px;
    font-weight: bold;
  }
  .write-post-form{
    display: flex;
    color: red;
  }
  .write-post-input{
    outline: none;
    background: #ffffffde;
  }
`;

const NewPostButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px;
  padding-top: 16px;
  
  button {
    border-radius: 30px;
    align-items: center;
    display: flex;
    span {
      font-size: 20px;
    }
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
  input {
    margin-right: 100px;
    height: 30px;
    align-items: center;
    padding: 0;
    margin: 0;
    border: solid 1px lightgrey;
    border-radius: 12px;
    font-size: 12px;
    display: flex;
    outline: none;

  }

  input[type="file"] {
  width: 220px;
  border-radius: 20px;  
  }
   input[type=file]::file-selector-button {
    margin: 0 10px 0 0;
          background-color: #c48befc4;
          color: #fff;
          cursor: pointer;
          border-radius: 20px;
          padding: 2px 22px;
          transition: background .2s ease-in-out;
        }


`;



// STYLED COMPONENTS -end

const CardMidNewPost = () => {
  const [isShown, setIsShown] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  }


      const fetchProfile = () => {
        const url = "https://code-media.propulsion-learn.ch/backend/api/social/users/me/";

        const config = {
            method: "GET",
            headers: new Headers({
                Authorization: token,
            }),

        }
        if (token) {

        fetch(url, config)
            .then(response => response.json())
            .then(result => setUser(result[0]))
            .catch(error => console.log('error', error));
        }

      };


  useEffect(() => {
    fetchProfile();
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://code-media.propulsion-learn.ch/backend/codepost/";
    const fd = new FormData();
    fd.append("title", title);
    fd.append("image", image);


    const config = {
      method: "POST",
      headers: new Headers({
        Authorization: token,
      }),
      body: fd,
    };

    fetch(url, config)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log(response.json());
        }
      })
      // .then(setTimeout(() => navigate("/posts"), 1000));
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

   const handleImageFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <QCard>
      <div className="body">
        <img className="image" src={user.avatar}></img>
        <form className="write-post-form" onSubmit={handleSubmit}>
          <label>
            <input type="text" name="title" onChange={handleTitleChange} placeholder="What's Up?" className="write-post-input"/>
          </label>
          <input className="post-button" type="submit" value="Post It" />
        </form>

      </div>
      <ButtonsContainer>
          <NewPostButtons>
            <div>
              <input type="file" onChange={handleImageFileChange} />
            </div>
          </NewPostButtons>
          <ExpandPostButtons onClick={handleClick}>
            Expand Create Post Button
          </ExpandPostButtons>
      </ButtonsContainer>
      {isShown && <CreatePost />}
    </QCard>
  
  );
};

export default CardMidNewPost;