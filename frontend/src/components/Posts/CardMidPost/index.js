import React, { useEffect } from "react";
import styled from "styled-components";

import heart from "../../../images/icons/svgs/heart.svg";
import share from "../../../images/icons/svgs/share.svg";


import { useState } from "react";
import Comment from "../Comment";

import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { defineTheme } from "../../Judge/lib/defineTheme";
import OutputWindow from "../../Judge/components/OutputWindows";
import OutputDetails from "../../Judge/components/OutputDetails";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {languageOptions} from "../../Judge/constants/languageOptions";
import CreateComment from "../../CreateComment";
import PostAnswers from "../Answers";

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
const Div6 = styled.div`
    display: flex; 
    flex-direction: column; 
    flex-shrink: 0; 
`;
const Div7 = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-end; 
`;
const CustomButton = styled.button`
    z-index: 10; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    margin-top: 1rem; 
    background-color: transparent; 
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; 
    transition-duration: 200ms; 
    flex-shrink: 0; 
    border-radius: 0.375rem; 
    border-width: 1px; 
    border-color: #000000; 
    opacity: !code ? 50 : 0
    :hover {
         box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
         }       
`;

// STYLED COMPONENTS -end

const CardMidPost = ({ post }) => {
   const javascriptDefault = `// The language is set to javascript. Happy Hacking!`
   const [btnState, setBtnState] = useState(false);
   const [answers, setAnswers] = useState("Leave an Answer");
   const [token, setToken] = useState(localStorage.getItem("auth"));
   const [theme, setTheme] = useState("");
   const [outputDetails, setOutputDetails] = useState(null);
   const [processing, setProcessing] = useState(null);
   const [code, setCode] = useState(javascriptDefault);
   const [language, setLanguage] = useState(languageOptions[0]);
   const navigate = useNavigate();


  const handleAnswersSubmit = (e) => {
    e.preventDefault();

    const url = `https://code-media.propulsion-learn.ch/backend/answers/create/${post.id}`;
    const fd = new FormData();
    fd.append("textContent", answers);


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

  const handleAnswersChange= (e) => {
    setAnswers(e.target.value);
  };
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const handleCompile = () => {
        if (post.language === "python") {
            setLanguage(languageOptions[1])
        }

        setProcessing(true);
        const formData = new FormData();
        formData.append('language_id', language.id)
        formData.append('source_code', btoa(post.code))
        const config = {
            method: "POST",
            url: "https://code-media.propulsion-learn.ch/judge/submissions/",
            params: { base64_encoded: "true", wait: "false" },
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": "f6583e60-b13b-4228-b554-2eb332ca64e7"

            },
            data: formData,
        };

        axios
          .request(config)
          .then(function (response) {
            console.log("res.data", response.data);
            const token = response.data.token;
            checkStatus(token);
          })
          .catch((err) => {
              let error = err.response ? err.response.data : err;
              let status = err.response.status;
              console.log("status", status);
              if (status === 429) {
                  console.log("too many requests", status);
              }
              setProcessing(false);
              console.log("catch block...", error);
          })
    };

  const checkStatus = async (token) => {
        const config = {
            method: "GET",
            url:`https://code-media.propulsion-learn.ch/judge/submissions/` + token,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "X-Auth-Token": "f6583e60-b13b-4228-b554-2eb332ca64e7"
            },
        };
        try {
            let response = await axios.request(config);
            let statusId = response.data.status?.id;

            if (statusId === 1 || statusId === 2) {
                setTimeout(() => {
                    checkStatus(token);
                }, 2000);
                return;
            }else{
                setProcessing(false);
                setOutputDetails(response.data);
                showSuccessToast(`Compile Successfully!`);
                console.log("response.data", response.data);
                return;
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
            showErrorToast();
        }
    };

  const showSuccessToast = (msg) => {
        toast.success(msg || `Compiled Successfully!`, {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const showErrorToast = (msg) => {
        toast.success(msg || `Something went wrong! Please try again.`, {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  //let toggleClassCheck = btnState ? " comments-fold" : " comments-unfold";
  return (
    <QCard>
        <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      <div className="header">
        <div className="left">
          <img className="image" src={post.author.avatar}></img>
        </div>
        <div className="right">
          <h5>{post.author.username}</h5>
          <p className="subtitle">Asked {post.created}</p>
          <h5>{post.title}</h5>
        </div>
      </div>
      <div className="body">
          {post.code ? <Editor
          height="40vh"
          width="100%"
          language={post.language || "javascript"}
          theme={theme.value}
          defaultValue={post.code}
        />: null}
        <p>{post.description}</p>
        {/*TODO: needs to be replaced with editor*/}
        <div className="img-wrapper" style={{ width: "200px" }}>
          <img
            className="image"
            style={{ height: "100%" }}
            src={post.image}
          ></img>
        </div>
         {post.code ?  <Div6>
                          <OutputWindow outputDetails={outputDetails} />
                                <Div7>

                                    <CustomButton
                                      onClick={handleCompile}
                   g                   disabled={!code}

                                    >
                                      {processing ? "Processing..." : "Compile and Execute"}
                                    </CustomButton>
                                </Div7>
                                {outputDetails && <OutputDetails outputDetails={outputDetails} />}
                      </Div6> : null}
          <div>
            <h6>Answers</h6>
                {/*<PostAnswers key={post.id} reply={post.postComments}/>*/}
          </div>

        {/*<div className={`${toggleClassCheck}`}>*/}
        <h6>Comments:</h6>
          <CreateComment/>
        {post.postComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="comment"></div>

      <div>
        <form className="form" onSubmit={handleAnswersSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={answers}
              onChange={handleAnswersChange}
              placeholder="Post an Answer"
            />
          </label>
          <input type="submit" value="Post Answer" />
        </form>
      </div>

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
