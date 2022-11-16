import {useState} from "react";
import Answers from "../Answers";

const Comment = ({comment}) => {
    const [comments, setComments] = useState([])
    return (
        <>
            <p print={console.log(comment)}>
               {comment.author.username}
            </p>
            <p>{comment.created}</p>
            <p>
               {comment.textContent}
            </p>
            <p>
               {comment.code}
            </p>
            <img src={comment.image} />
            <h3>Answers:</h3>
             {comment.replies.map((reply) => (
            <Answers key={reply.id} reply={reply} />
      ))}
        </>
    )
}

export default Comment;
