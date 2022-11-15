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