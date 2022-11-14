import styled from "styled-components";
import feedPic1 from "../../../src/images/feedPics/image1.png";
import feedPic2 from "../../../src/images/feedPics/image2.png";
import feedPic3 from "../../../src/images/feedPics/image3.png";
import feedPic4 from "../../../src/images/feedPics/image4.png";
import jennifer from "../../../src/images/users/jennifer.png";
import heart from "../../../src/images/svgs/heart.svg";
import share from "../../../src/images/svgs/share.svg";
import ModalConfirmDelete from "./ModalConfirmDelete";
import ModalCreatePost from "./ModalCreatePost";
import ModalMoreOptions from "./ModalMoreOptions";
import ModalReadPost from "./ModalReadPost";

import { useSelector, useDispatch } from "react-redux";
// Import the stuff you need from the redux slice
import { toggle_modal_read } from "../../redux/slices/post-modal-slice.js";
// import useState to create local state

// Importing UseState and using it on the Notification-Icon (inside <p> tag as a counter)
// this is only temporary
import { useState } from "react";

// STYLED COMPONENTS -start
const CardWrapper = styled.div`
  background-color: white;
  border: 1px dashed red;
  display: flex;
  flex-direction: column;
  width: 49.1%;
  border-radius: 22px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;
const Title = styled.div`
  border: 1px dashed blue;
  display: flex;
  padding: 16px;
  img {
    margin-right: 16px;
  }
`;

const Body = styled.div`
  border: 1px solid green;
  padding: 16px;
  p {
    padding: 8px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    padding: 8px;
    width: 50%;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  img {
    margin-right: 8px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
// STYLED COMPONENTS -end

const PostCard = ({ username, images, avatars, content, likes }) => {
  const [state, setState] = useState("Like");
  const isOpen = useSelector((state) => state.toggle_modal__.modelRead_is_open);
  const isCOpen = useSelector(
    (state) => state.toggle_modal__.modelCreate_is_open
  );
  const dispatch = useDispatch();
  // console.log(images);
  console.log(avatars);
  const handleLikeButton = (event) => {
    event.preventDefault();
    setState("Liked");
  };

  const handleToggle = () => {
    dispatch(toggle_modal_read());
  };

  return (
    <>
      {isOpen ? <ModalReadPost /> : ""}
      {isCOpen ? <ModalCreatePost /> : ""}
      <CardWrapper>
        <Title
          onClick={() => {
            handleToggle();
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={avatars} />
          <div>
            <p>{username}</p>
            <p>Just Now</p>
          </div>
        </Title>
        <Body>
          <p>
            {content} --It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum
          </p>
          {/* {postData.map((post) => (
              <div key={post.id}>
                <div>{post.content}</div>
                <div>
                  {post.images.map((image) => (
                    <PostImages src={image.image}></PostImages>
                  ))}
                </div>
                <div>
                  {post.user.first_name} {post.user.last_name}
                </div>
                <div>{post.id}</div>
              </div>
               ))} */}
          <ImageWrapper>
            {images.map((image) => (
              <img key={image.id} src={image.image} />
            ))}
            {/* <img src={image}></img>
            <img src={feedPic2}></img>
            <img src={feedPic3}></img>
            <img src={feedPic4}></img> */}
          </ImageWrapper>
          <SocialButtons>
            <div>
              <img src={heart}></img>
              <button
                onClick={() => {
                  handleLikeButton();
                }}
              >
                {state}
              </button>
            </div>
            <div>
              <img src={share}></img>
              <button>Share</button>
            </div>
            <span>{likes} Likes</span>
          </SocialButtons>
        </Body>
      </CardWrapper>
    </>
  );
};

export default PostCard;
