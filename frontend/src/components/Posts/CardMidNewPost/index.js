import React from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";
import heart from "../../../images/icons/svgs/heart.svg";
import share from "../../../images/icons/svgs/share.svg";
import meme from "../../../images/memes/ten-sec.jpg";
import profile1 from "../../../images/users/profile1.jpg";

// STYLED COMPONENTS -start

const QCard = styled.div`
  border-top: 5px solid #492d71;
  margin: 8px;
  width: 600px;
  height: 100%;
  background-color: #1e1f26;
  display: flex;
  justify-content: start;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #505263;
  border-radius: 8px;
  .wrapper {
    display: flex;
  }
  .image {
    border-radius: 100%;
    width: 50px;
    margin: 16px;
  }
  p,
  h5 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
  .body {
    display: flex;
    align-items: center;
  }
  input[type=text] {
  height: 60px;
  width: 350px;
  margin-left: 8px;
  padding-left: 8px;
  }
`;

const NewPostButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px;
  padding-top: 16px;
  button {
    background-color: #492d71;
    color: white;
    border-radius: 30px;
    align-items: center;
    display: flex;
    span {
      font-size: 20px;
    }
  }
  svg {
    fill: white;
  }
  img {
    margin-right: 8px;
    height: 20px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

// STYLED COMPONENTS -end

const CardMidNewPost = () => {
  return (
    <QCard>
      <div className="body">
        <img className="image" src={profile1}></img>
        <form>
          <label>
            <input type="text" name="name" placeholder="What's Up?" />
          </label>
          <input type="submit" value="Post It" />
        </form>
      </div>

      <NewPostButtons>
        <div>
          <button>[ AddImage ]</button>
        </div>
        <div>
          <button>[ OpenEditor ]</button>
        </div>
      </NewPostButtons>
    </QCard>
  );
};
export default CardMidNewPost;
