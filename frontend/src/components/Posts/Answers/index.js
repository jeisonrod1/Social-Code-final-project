

const Answers = ({reply}) => {

    return (
        <>
            <p>{reply.author.username}</p>
            <img src={reply.author.avatar} />
            <p>
                {reply.content}
            </p>
        </>
    )
}

export default Answers;
