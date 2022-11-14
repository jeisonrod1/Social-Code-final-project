import {BeingFlexed, BeingGrinded, ButtonDiv, Context, FullName, Located, UpperPart} from "../friends-style";



const UserCard = ({user}) => {

    return (
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
    )
}
export default UserCard;