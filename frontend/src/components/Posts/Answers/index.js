


const Answers = ({reply}) => {



    return (
        <>
           <div >
               {reply ? (
                <div>
                    <p>{reply.author.username}</p>
                    <p>{`${new Date(reply.created).toLocaleDateString('en-GB', {year:"numeric", month:"numeric", day:"numeric"})} ${new Date(reply.created).toLocaleTimeString('en-GB', {hour:"numeric", minute:"numeric"})} `}</p>
                    <img src={reply.author.avatar} width="20px"/>
                    <p>{reply.content}</p>
                </div>
               ) : null}
           </div>

        </>
    )
}

export default Answers;
