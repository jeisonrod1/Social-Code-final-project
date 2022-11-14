import {BeingFlexed, BeingGrinded, ButtonDiv, Context, FullName, Located, UpperPart, AddFriendBtn} from "../friends-style";
import {useLocation} from "react-router-dom";
import {useEffect} from 'react';


const UserCard = ({user}) => {

    const location = useLocation().pathname

    useEffect(() => {
        console.log(location)
    })

    const handleFriendClick = () => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('auth'));

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        let url = `https://code-media.propulsion-learn.ch/backend/friends/create/${user.id}`
        fetch(url, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

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

                  )} */}
                    {location != '/my_friends/' ? <AddFriendBtn onClick={() => handleFriendClick(user.id)}> ADD FRIEND </AddFriendBtn> : ''}

                </ButtonDiv>
                <div>
                  <Context>{user.about_me}</Context>
                </div>
              </BeingFlexed>
            </BeingGrinded>
    )
}
export default UserCard;