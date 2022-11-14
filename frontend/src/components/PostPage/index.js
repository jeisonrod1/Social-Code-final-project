import React, {useEffect, useState} from "react";
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

const FindFriends = () => {
  const [friends, setFriends] = useState([])

  let token = localStorage.getItem("auth")
  useEffect(() => {
    fetchFriends()
  }, []);



  const fetchFriends = () => {
    var myHeaders = new Headers();
myHeaders.append("Authorization", token);
myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:8001/backend/friends/", requestOptions)
  .then(response => response.json())
  .then(result => setFriends(result))
  .catch(error => console.log('error', error));

  }



  return (
        <Gridding>
          {friends.map((user) => (
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
            </BeingGrinded>))}
        </Gridding>
  );
};
export default FindFriends;
