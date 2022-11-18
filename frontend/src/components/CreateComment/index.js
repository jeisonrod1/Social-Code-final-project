import {InputItemInputField, SubmitButtonButton, SubmitButtonDiv} from "../CreatePost/CreateCodePost/index.styled";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { CommentContainer} from "./index.styled";


function CreateComment({post}) {
     const [answers, setAnswers] = useState("Leave a Comment...");
     const [token, setToken] = useState(localStorage.getItem("auth"));
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

        navigate("/login")

  };

  const handleAnswersChange= (e) => {
    setAnswers(e.target.value);
  };
  const handleInputClick = () => {
      setAnswers("")
  }

    return (
        <div>
            <CommentContainer>
                <form onSubmit={handleAnswersSubmit}>
                    <InputItemInputField value={answers} onClick={handleInputClick} onChange={handleAnswersChange}/>
                    <SubmitButtonDiv>
                        <SubmitButtonButton type="submit">Post It</SubmitButtonButton>
                    </SubmitButtonDiv>
                </form>
            </CommentContainer>
        </div>
    )
}

export default CreateComment;