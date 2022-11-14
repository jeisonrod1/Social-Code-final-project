import React, { useState } from "react";
import {
  Container,
  Main,
  Gridding,
  BeingGrinded,
  BeingFlexed,
  UpperPart,
  FullName,
  StylingP,
  Located,
  ButtonDiv,
  FollowBtn,
  AddFriendBtn,
  Follow_add_friend_btn_container,
  UnfollowBtn,
  FriendBtw,
  Context,
  Hobbies,
  HobbiesDiv,
  Border1pxSolidBlack,
  RoundButtonImages,
} from "./friends-style.js";

// symbol mark done for button (Friend use);
import markDone from "../../images/icons/svgs/mark-done-symbol.svg";



const PostPage = () => {
  // -----------------------------------------------------------------------------------------
  // Start of Manuel's Logic




  const userdata2 = [
     {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    {
      id: 1,
      wallet: [],
      username: "alex",
      first_name: "test",
      last_name: "test",
      email: "alex@email.com",
      location: "test",
      phone: "test",
      about_me: "test",
      social_media: "",
      experience: "",
      company: "",
      date_joined: "2022-11-11T14:25:36.638584Z",
      avatar:
        "http://localhost:8001/backend/media-files/avatar%201/badger_E12IdYa.png",
      user_level: "",
      amount_of_posts: 0,
      amount_of_friends: 0,
      amount_following: 0,
      points: 12312,
      friends: [],
      following: [],
    },
    
  ];
  // useEffect(() => {
  //   const url = "https://motion.propulsion-home.ch/backend/api/social/followers/following/";

  //     const tokenFromLs = localStorage.getItem("auth")
  //     const tokenJsObject = JSON.parse(tokenFromLs)

  //   const config = {
  //     method: "GET",
  //     headers: new Headers({
  //       Authorization: `Bearer ${tokenJsObject.motionToken}`,
  //     }),
  //   };

  //   fetch(url, config)
  //     .then(response => response.json())
  //     .then(data => setUserData(data.results), console.log(userData));
  // }, []);

  // const handleFriendClick = id => {
  //   const url = "https://motion.propulsion-home.ch/backend/api/social/friends/request/";

  //     const tokenFromLs = localStorage.getItem("auth")
  //     const tokenJsObject = JSON.parse(tokenFromLs)

  //   const config = {
  //     method: "POST",
  //     headers: new Headers({
  //       Authorization: `Bearer ${tokenJsObject}`,
  //     }),
  //   };

  //   fetch(`${url}${id}/`, config).then(response => console.log(response));
  // };
  return (
    <Container>
      <Main>
        <Gridding>
          {userdata2.map((user) => (
            <BeingGrinded key={user.id}>
              <BeingFlexed>
                <div>
                  <img
                    src={user.avatar}
                    alt="Profile Image"
                    style={{ width: "60px" }}
                  />
                </div>
                <UpperPart>
                  <FullName>
                    {user.first_name} {user.last_name}
                  </FullName>
                  <Located>{user.location}</Located>
                </UpperPart>
                <ButtonDiv>
                  {/* {user.logged_in_user_is_following ? (
                    <UnfollowBtn>FOLLOWING</UnfollowBtn>
                  ) : (
                    <FollowBtn>FOLLOW</FollowBtn>
                  )}

                  {user.logged_in_user_is_friends ? (
                    <Follow_add_friend_btn_container>
                      <FriendBtw>
                        <img src={markDone} />
                        &nbsp;&nbsp;FRIEND
                      </FriendBtw>
                    </Follow_add_friend_btn_container>
                  ) : (
                    <AddFriendBtn onClick={() => handleFriendClick(user.id)}>
                      ADD FRIEND
                    </AddFriendBtn>
                  )} */}
                </ButtonDiv>
                <div>
                  <Context>{user.about_me}</Context>
                </div>
              </BeingFlexed>
            </BeingGrinded>
          ))}
        </Gridding>
      </Main>
    </Container>
  );
};
export default PostPage;
