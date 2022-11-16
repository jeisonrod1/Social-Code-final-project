import {AnswersContainer} from "./index.styled";


const PostAnswers = ({postComments}) => {

    return (
        <>
           <div >
               {postComments ? (
                <div print={console.log(postComments)}>
                    <p>{postComments.author.username}</p>
                    <img src={postComments.author.avatar} width="20px"/>
                    <p>{postComments.content}</p>
                </div>
               ) : <h5>loading...</h5>}
           </div>

        </>
    )
}

export default PostAnswers;
