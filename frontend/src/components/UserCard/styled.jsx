import styled from "styled-components";


export const UserCardContainer = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #282828;
    position: relative;
    margin-top: 60px;

    h1 {
        font-family: 'Encode Sans SC', sans-serif;
        font-size: ${p=>p.theme.fontSizeXL};
        font-weight: bold;
        color: white;
    }
    
`

export const Avatar = styled.div`
    height: 150px;
    width: 150px;
    border: solid #282828 4x;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -75px;

    img {
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }
`

export const CompanyLabel = styled.label`
    border: solid 1px white;
    height: 15px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 10px;
    font-size: ${p=>p.theme.fontSizeS};
`

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 16px;
        margin-right: 4px;
    }
`

export const AddFriendButton = styled.button`
    background: ${p=>p.theme.purpleLight};
    color: white;
    font-size: ${p=>p.theme.fontSizeM};
    width: 140px;
    height: 36px;
    border-radius: 4px;
    border: none;
    margin-top: 26px;

    :hover {
        cursor: pointer;
        font-weight: bold;
    }

`