import {InputItemInputField, SubmitButtonButton, SubmitButtonDiv} from "../CreatePost/CreateCodePost/index.styled";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function CreateComment({post}) {
     const [answers, setAnswers] = useState("Leave an Comment");
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
      .then(setTimeout(() => navigate("/posts"), 1000));
  };

  const handleAnswersChange= (e) => {
    setAnswers(e.target.value);
  };

    return (
        <div>
            <form onSubmit={handleAnswersSubmit}>
                <InputItemInputField onChange={handleAnswersChange}/>
                <SubmitButtonDiv>
                    <SubmitButtonButton type="submit">Post It</SubmitButtonButton>
                </SubmitButtonDiv>
            </form>
        </div>
    )
}

export default CreateComment;