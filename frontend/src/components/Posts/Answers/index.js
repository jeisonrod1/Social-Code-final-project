

const Answers = ({answers}) => {

    return (
        <>
            <p>
                {answers.textContent}
            </p>
            <p>
                {answers.code}
            </p>
            <img source={answers.image}/>
        </>
    )
}

export default Answers;
