import {AnswersContainer} from "./index.styled";


const Answers = ({reply}) => {

    return (
        <>
           <div >
               {reply ? (
                <div>
                    <h3>THIS IS A TEST</h3>
                    <p>{reply.author.username}</p>
                    <img src={reply.author} width="20px"/>
                    <p>{reply.content}</p>
                </div>
               ) : <h5>loading...</h5>}
           </div>

        </>
    )
}

export default Answers;
