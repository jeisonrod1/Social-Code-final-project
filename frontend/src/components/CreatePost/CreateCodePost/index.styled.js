import styled from 'styled-components';

export const BodyForm = styled.form`
    height: 100px;
    background-color: grey;
    ;

`;
export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(76, 76, 76, 1);
    font-size: 24;
        > h3 {
            margin-top: 50px;
        }
        > img {
            margin-top: 16px;
            margin-bottom: 40px;
        }
`;
export const InputGridDiv = styled.div`
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 15vh;
    margin-right: 15vh;
`;
export const InputItemDiv = styled.div`
    top: 4.44%;
    
`;
export const InputItemTitle = styled.p`
    color: rgba(151, 151, 151, 1);
    font-size: 20px;
    line-height: 100%;
    text-align: left;
    vertical-align: Top;
    margin-bottom: 10px;
`;
export const InputItemInputField = styled.input`
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    width: 40vh;
    height: 45px;
    font-size: 16px;
`;
export const InputItemImageUpload = styled.input`
`;
export const InputItemSelectField = styled.select`
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    width: 38vh;
    height: 45px;
    background-color: rgba(255, 255, 255, 1);
    -webkit-appearance:none;
    font-size: 16px;
`;
export const SubmitButtonDiv = styled.div`
    background-color: light-blue;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
`;
export const SubmitButtonButton = styled.button`
    background-color: light-blue;
    height: 57px;
    width: 200px;
    background-color: rgba(228, 125, 49, 1);
    color: white;
    font-size: 20px;
    border-radius: 28px;
    line-height: 23px;
    border-style: none;
`;

