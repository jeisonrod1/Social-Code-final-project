import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 16px;
    padding: 16px;
    h6 {
    padding: 8px;
    }
    .jobwrapper {
    display: flex;
    }
    h1.h1 {
    padding-left: 8px;
    }
`

export const Stats = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 16px;
    padding: 16px;
    h6 {
    padding: 8px;
    }
`
export const LeftWrapper = styled.div`
    width: 200px;
`

export const RightWrapper = styled.div`
    width: 600px;
`

export const ProfileCardContainer = styled.div`
    height: 460px;
    width: 980px;
    display: flex;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #282828;
    position: relative;
    margin-top: 60px;

    h1 {
        font-family: 'Encode Sans SC', sans-serif;
        font-size: ${p=>p.theme.fontSizeXXL};
        font-weight: bold;
        color: white;
    }

    :hover {
        cursor: pointer;
        background: #282828a1;
        transform: scale(1.05);
        transition: ${p=>p.theme.transitionNormal};
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
        object-fit: cover;
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
    margin-top: 10px;
`

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 6px 0 0 12px;
    font-size: ${p=>p.theme.fontSizeS};

    img {
        height: 16px;
        margin-right: 4px;
        
    }
`

export const Experience = styled.h2`
    font-size: ${p=>p.theme.fontSizeS};
    color: white;
    margin-top: 8px;
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
    position: absolute;
    bottom: 40px;

    :hover {
        cursor: pointer;
        font-weight: bold;
    }

`