import React, {useState} from "react";
import Answers from "../Answers";
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

     const [replies, setReplies] = useState("Leave an Comment");
     const [token, setToken] = useState(localStorage.getItem("auth"));
     const navigate = useNavigate();

    const handleReplySubmit = (e) => {
    e.preventDefault();

    const url = `https://code-media.propulsion-learn.ch/backend/comments/create/${comment.id}`;
    const fd = new FormData();
    fd.append("content", replies);


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

  const handleReplyChange= (e) => {
    setReplies(e.target.value);
  };

    return (
        <>
            <div>
                <div style={{ width: "40px"}}>
                <img className="image" src={comment.author.avatar} ></img>
                </div>
                <p>
                   {comment.author.username}
                </p >
                <p>{`${new Date(comment.created).toLocaleDateString('en-GB', {year:"numeric", month:"numeric", day:"numeric"})} ${new Date(comment.created).toLocaleTimeString('en-GB', {hour:"numeric", minute:"numeric"})} `}</p>
                <p>
                   {comment.textContent}
                </p>
                <p>
                   {comment.code}
                </p>
                <img src={comment.image} />
                <form onSubmit={handleReplySubmit}>
                    <div>
                        <input onChange={handleReplyChange}/>
                    </div>
                    <button/>
                </form>
                <h3>Replies:</h3>
                 {comment.replies.map((reply) => (
                <Answers key={reply.id} reply={reply} />
          ))}
            </div>
        </>
    )
}

export default Comment;
