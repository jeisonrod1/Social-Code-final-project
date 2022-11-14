import React, { useEffect } from "react";
import styled from "styled-components";

import heart from "../../../images/icons/svgs/heart.svg";
import share from "../../../images/icons/svgs/share.svg";

import content from "../../../images/content/hooray.jpg";
import { useState } from "react";
import Comment from "../Comment";
import Answers from "../Answers";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { defineTheme } from "../../Judge/lib/defineTheme";

// STYLED COMPONENTS -start

const QCard = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  padding: 16px;
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #5052632e;
  border-radius: 8px;
  .light & {
    background-color: rgba(126, 126, 126, 0.12);
    transition: 1s all;
  }
  .dark & {
    background-color: rgba(126, 126, 126, 0.12);
    transition: 1s all;
  }
  .header {
    display: flex;
    justify-content: start;
    margin-bottom: 16px;
    .left {
      justify-content: flex-start;
      p {
        margin: 16px 0 0 16px;
      }
      h5 {
        border-radius: 20px;
        padding: 8px 16px;
        margin: 16px 0 16px 16px;
        display: inline-flex;
      }
      img {
        border-radius: 100%;
      }
    }
    .right {
      justify-content: flex-start;
      text-align: left;
      p {
        margin: 0 8px 0 8px;
      }
      h5 {
        margin: 4px 8px 0 8px;
      }
    }
  }
  .body {
    .form {
      margin-top: 32px;
    }
    .comment {
      border-top: 1px solid #505263;
      border-bottom: 1px solid #505263;
    }
    p {
      margin: 8px 8px 8px 8px;
      font-size: 14px;
      font-weight: 500;
    }
    h5 {
      margin: 8px 8px 8px 8px;
      font-size: 14px;
      font-weight: 700;
    }
    span {
      margin-top: 6px;
    }
    .expander {
      margin-top: 16px;
      display: flex;
      justify-items: center;
    }
    input[type="text"] {
      height: 30px;
      width: 70%;
      margin-left: 8px;
      padding-left: 8px;
    }
    .comments-fold {
      height: 200px;
      overflow: hidden;
      transition: height 0.4s all;
    }
    .comments-unfold {
      height: 100%;
      transition: height 0.4s all;
    }
  }
  .left img {
    margin-right: 8px;
    height: 40px;
    width: 40px;
  }
  .image {
    width: 100%;
    margin: 0;
  }
  .subtitle {
    font-size: 12px;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  padding-top: 16px;
  button {
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
  .comments-unfold .material-symbols-outlined {
    transform: rotate(180deg);
  }
`;

// STYLED COMPONENTS -end

const CardMidPost = ({ post }) => {
  const [btnState, setBtnState] = useState(false);
  const [comment, setComment] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [theme, setTheme] = useState("");

  const navigate = useNavigate();

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const url = "https://code-media.propulsion-learn.ch/backend/codepost/";
    const fd = new FormData();
    fd.append("content", comment.content);

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
      .then(setTimeout(() => navigate("/posts"), 1000));
  };

  const handleCommentChange = (e) => {
    setComment(e);
  };
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  //let toggleClassCheck = btnState ? " comments-fold" : " comments-unfold";
  return (
    <QCard>
      <div className="header">
        <div className="left">
          <img className="image" src={post.user.avatar}></img>
          {/*TODO: needs work with the image*/}
        </div>
        <div className="right">
          <h5>{post.title}</h5>
          <p className="subtitle">Asked {post.created}</p>
        </div>
      </div>
      <div className="body">
        <Editor
          height="40vh"
          width="100%"
          language={post.language || "javascript"}
          theme={theme.value}
          defaultValue={post.code}
        />
        <p>{post.description}</p>
        {/*TODO: needs to be replaced with editor*/}
        <div className="img-wrapper" style={{ width: "200px" }}>
          <img
            className="image"
            style={{ height: "100%" }}
            src={post.image}
          ></img>
        </div>
        {/*<div className={`${toggleClassCheck}`}>*/}
        <h6>Comments:</h6>
        {post.answersToComments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <div className="comment"></div>

      <div>
        <form className="form" onSubmit={handleCommentSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Post a comment"
            />
          </label>
          <input type="submit" value="Post It" />
        </form>
      </div>
      <h3>Answers:</h3>
      {post.answersToCodePost.map((answers) => (
        <Answers answers={answers} />
      ))}
      <SocialButtons>
        <div>
          <img src={heart}></img>
          <button>Like</button>
          <span>[ 34 ]</span>
        </div>
        <div>
          <img src={share}></img>
          <button>Share</button>
        </div>
        {/*<div className={`expander${toggleClassCheck}`} onClick={handleClick}>
          <h5>{`${toggleClassCheck}`}</h5>
          <span className="material-symbols-outlined">expand_more</span>
        </div>*/}
      </SocialButtons>
    </QCard>
  );
};
export default CardMidPost;
