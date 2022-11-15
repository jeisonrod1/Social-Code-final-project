import {InputItemInputField, SubmitButtonButton, SubmitButtonDiv} from "../CreatePost/CreateCodePost/index.styled";


function CreateComment() {

    return (
        <div>
            <InputItemInputField/>
            <SubmitButtonDiv>
                <SubmitButtonButton type="submit">Post It</SubmitButtonButton>
            </SubmitButtonDiv>
        </div>
    )
}

export default CreateComment;