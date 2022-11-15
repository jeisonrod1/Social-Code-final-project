import {AnswersContainer} from "./index.styled";


const Answers = ({reply}) => {

    return (
        <>
           <div >
               {reply ? (
                <div>
                    <p>{reply.author.username}</p>
                    <img src={reply.author.avatar} width="20px"/>
                    <p>{reply.content}</p>
                </div>
               ) : <h5>loading...</h5>}
           </div>

        </>
    )
}

export default Answers;
