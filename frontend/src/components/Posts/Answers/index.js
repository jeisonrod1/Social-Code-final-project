import {AnswersContainer} from "./index.styled";


const PostAnswers = ({postComments}) => {

    return (
        <>
           <div >
               {postComments ? (
                <div print={console.log(postComments)}>
                    <p>{postComments.author.username}</p>
                    <p>{`${new Date(postComments.created).toLocaleDateString('en-GB', {year:"numeric", month:"numeric", day:"numeric"})} ${new Date(postComments.created).toLocaleTimeString('en-GB', {hour:"numeric", minute:"numeric"})} `}</p>
                    <img src={postComments.author.avatar} width="20px"/>
                    <p>{postComments.content}</p>
                </div>
               ) : null}
           </div>

        </>
    )
}

export default PostAnswers;
