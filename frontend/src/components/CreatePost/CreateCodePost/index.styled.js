import styled from 'styled-components';

export const Gridding = styled.form`
`;

export const BodyForm = styled.form`
    height: 450px;
    width: 566px;
    /* background-color: rgba(126, 126, 126, 0.12); */
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    border-radius: 0 0 8px 8px;

    padding: 8px;
    div {
        margin-right: 34px;
    }
    select{
        background-color: ${props => props.theme.backgroundBlackLight};
        border-radius: 20px;
        padding: 8px 14px;
        
    }
    input[type=file]::file-selector-button {
          border: none;
          background: rgba(126,126,126,0.12);
          color: #fff;
          cursor: pointer;
          transition: background .2s ease-in-out;
        }

    ;
`;
export const TitleDiv = styled.div`
`;
export const InputGridDiv = styled.div`
    display: flex;
    flex-wrap: wrap;

`;
export const InputItemDiv = styled.div`

`;
export const InputItemTitle = styled.p`

`;
export const InputItemInputField = styled.input`
`;
export const InputItemImageUpload = styled.input`
`;
export const InputItemSelectField = styled.select`
`;
export const SubmitButtonDiv = styled.div`
`;
export const SubmitButtonButton = styled.button`
    height: 30px;
    width: 100px;
    background-color: #492d71;
    border-radius: 28px;
`;

export const OutputItemDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    flex-shrink: 0; 
    width: 35%;
`;

export const OutputCodeDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-end; 
`;
