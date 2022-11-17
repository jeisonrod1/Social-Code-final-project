import styled from "styled-components";


export const UsersListContainer = styled.div`
    height: 100%;
    width: 60%;
    display: grid;
    padding: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    margin: 0 auto;
    padding-top: 100px;
`

export const AvatarUsers = styled.div`
    height: 150px;
    width: 150px;
    border: solid #282828 4px;
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
        object-fit: cover;
    }
`

