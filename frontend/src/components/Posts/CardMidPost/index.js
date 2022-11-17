import React, { useEffect } from "react";
import styled from "styled-components";
import share from "../../../images/icons/svgs/share.svg";
import { useState } from "react";
import Comment from "../Comment";
import Editor from "@monaco-editor/react";
import { defineTheme } from "../../Judge/lib/defineTheme";
import OutputWindow from "../../Judge/components/OutputWindows";
import OutputDetails from "../../Judge/components/OutputDetails";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {languageOptions} from "../../Judge/constants/languageOptions";
import CreateComment from "../../CreateComment";
import Badges from "../Badges";

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
const PointsCont = styled.div`
    display: flex;
    justify-content: flex-end;
    height: fit-content;
    flex-grow: 1;
    p {
        border: 4px solid rgba(218,165,32);
        background: linear-gradient(0.33turn, gold, darkgoldenrod, #f69d3c);
        border-radius: 50px;
        text-align: center;
        color: white;
        width: 100px;
        font-weight: 500;
    }
`;

// STYLED COMPONENTS -end

const CardMidPost = ({ post }) => {
   const javascriptDefault = `// The language is set to javascript. Happy Hacking!`
   const [answers, setAnswers] = useState("Leave an Answer");
   const [token, setToken] = useState(localStorage.getItem("auth"));
   const [theme, setTheme] = useState("");
   const [outputDetails, setOutputDetails] = useState(null);
   const [processing, setProcessing] = useState(null);
   const [code, setCode] = useState(javascriptDefault);
   const [language, setLanguage] = useState(languageOptions[0]);
   const [points, setPoints] = useState(0)
    const [gold, setGold] = useState(0)
    const [silver, setSilver] = useState(0)
    const [bronze, setBronze] = useState(0)
    const [likes, setLikes] = useState(0)



   useEffect(() => {
       setLikes(generateRandom(100))
       setGold(generateRandom(5))
       setSilver(generateRandom(7))
       setBronze(generateRandom(10))

   }, [])

    useEffect(() => {
        setPoints(calcPoints())
    }, [likes, gold, silver, bronze])


   const generateRandom = (max) => {
       return Math.floor(Math.random() * max)
   }

   const calcPoints = () => {
       let points = 0;
       points += likes;
       points += gold * 100;
       points += silver * 50;
       points += bronze * 25;
       return points
   }

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
          <p className="subtitle">Asked {`${new Date(post.created).toLocaleDateString('en-GB', {year:"numeric", month:"numeric", day:"numeric"})} ${new Date(post.created).toLocaleTimeString('en-GB', {hour:"numeric", minute:"numeric"})} `}</p>
          <h5>{post.title}</h5>
        </div>
          <PointsCont><p>{points}</p></PointsCont>
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
                                      disabled={!code}

                                    >
                                      {processing ? "Processing..." : "Compile and Execute"}
                                    </CustomButton>
                                </Div7>
                                {outputDetails && <OutputDetails outputDetails={outputDetails} />}
                      </Div6> : null}

        <Badges likes={likes} gold={gold} silver={silver} bronze={bronze} setters={{setLikes, setGold, setBronze, setSilver}} />
        <h6>Comments:</h6>
          <CreateComment key={post} post={post}/>
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

    </QCard>
  );
};
export default CardMidPost;
