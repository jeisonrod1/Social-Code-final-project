import styled from 'styled-components';

export const Gridding = styled.form`
`;

export const BodyForm = styled.form`
    height: 450px;
    width: 566px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    border-radius: 0 0 8px 8px;

    padding: 8px;
    div {
        padding-top: 5px; 
        margin-right: 150px;
    }
    select{
        background-color: transparent;
        border-radius: 20px;
        padding: 8px 14px;
        
    }
    input[type=file]::file-selector-button {
          border: none;
          background-color: #ad3dea;
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
    background-color: #ad3dea;
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
