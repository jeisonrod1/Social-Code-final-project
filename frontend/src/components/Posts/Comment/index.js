import {useState} from "react";

const Comment = ({comment}) => {
    const [comments, setComments] = useState([])
    return (
        <>
            <p>
               Username
            </p>
            <p>
                {comment.content}
            </p>
        </>
    )
}

export default Comment;
