import {AnswersContainer} from "./index.styled";


const Answers = ({reply}) => {

    return (
        <>

                <p>{reply.author.username}</p>
           <div>
                <img src={reply.author.avatar} width="20px"/>
                <p>
                    {reply.content}
                </p>
            </div>
        </>
    )
}

export default Answers;
