import styled from "styled-components";
import badge1 from '../../../images/badges/1st.png'
import badge2 from '../../../images/badges/2nd.png'
import badge3 from '../../../images/badges/3rd.png'


const BaseDiv = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 10px 5px;
    border-top: 1px solid dimgray;
    border-bottom: 1px solid dimgray;
    >div {
        display: flex;
    }
`;
const BadgeContainer = styled.div`
    display: flex;
        flex-direction: column;
        align-items: center;
    img {
        width: 30px;
        aspect-ratio: 1 / 1;
        border: 3px solid gold;
        border-radius: 50%;
        margin: 0px 5px;
        
        :hover {
            cursor: pointer;
        }
    }
    span {
        margin: 0px;
        }
`;


const LikeButton = styled.button`
    border: 1px solid gray;
    background: transparent;
    border-radius: 50px;
    text-align: center;
    color: lightgray;
    width: 100px;
    font-weight: 500;
    
`;
const Badges = ({likes, gold, silver, bronze, setters}) => {

    return(
        <BaseDiv>
            <LikeButton onClick={() => {setters.setLikes(likes + 1)}}>{likes} Likes</LikeButton>
            <div>
                <BadgeContainer onClick={() => {setters.setGold(gold + 1)}}>
                    <img src={badge1} title={"Keep Up The Great Work"} alt={"Keep Up The Great Work"} />
                    <span>{gold}</span>
                </BadgeContainer>
                <BadgeContainer onClick={() => {setters.setSilver(silver + 1)}}>
                    <img src={badge2} title={"This Is Really Funny"} alt={"This Is Really Funny"} />
                    <span>{silver}</span>
                </BadgeContainer>
                <BadgeContainer onClick={() => {setters.setBronze(bronze + 1)}}>
                    <img src={badge3} title={"This Is Really Smart"} alt={"This Is Really Smart"}/>
                    <span>{bronze}</span>
                </BadgeContainer>
            </div>
        </BaseDiv>
    )
}

export default Badges;