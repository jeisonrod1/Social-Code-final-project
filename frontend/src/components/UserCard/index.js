import {useLocation, useNavigate} from "react-router-dom"
import {useState} from 'react'
import { AddFriendButton, RequestSendButton, Avatar, CompanyLabel, Experience, LocationWrapper, UserCardContainer } from "./styled"
import avatar_placeholder from "../../images/logos/logo-color.png"
import location_icon from "../../images/icons/svgs/location.svg"

const UserCard = ({ user }) => {
    const location = useLocation().pathname
    const [requestSent, setRequestSent] = useState(false)
    const navigate = useNavigate()

    const handleFriendClick = () => {
        setRequestSent(true)
        var myHeaders = new Headers()
        myHeaders.append("Accept", "application/json")
        myHeaders.append("Authorization", localStorage.getItem("auth"))

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        }
        let url = `https://code-media.propulsion-learn.ch/backend/friends/create/${user.id}`
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log("error", error))
    }

    const handleUserPage = () => {
        const url = `https://code-media.propulsion-learn.ch/backend/api/social/users/${user.id}/`
        console.log("clicked")
        localStorage.setItem("url", url)
        navigate("/userpage")
    }


    return (
        <UserCardContainer onClick={handleUserPage} key={user.id}>
            <Avatar>
                <img src={user.avatar ? user.avatar : avatar_placeholder} />
            </Avatar>

            <h1 className="user-card-name">
                {user.first_name} {user.last_name}
            </h1>
            <Experience>{user.experience}</Experience>
            <CompanyLabel>{user.company}</CompanyLabel>
            <LocationWrapper>
                <img src={location_icon} />
                {user.location}
            </LocationWrapper>

            {/* {user.logged_in_user_is_following ? (
                    <UnfollowBtn>FOLLOWING</UnfollowBtn>
                  ) : (<FollowBtn>FOLLOW</FollowBtn>)}
                  {user.logged_in_user_is_friends ? (
                    <Follow_add_friend_btn_container>
                      <FriendBtw>
                        <img src={markDone} />
                        &nbsp;&nbsp;FRIEND
                      </FriendBtw>
                    </Follow_add_friend_btn_container>
                  ) : (
                  )} */}
            {/* {location != '/my_friends/' ? <button onClick={() => handleFriendClick(user.id)}> ADD FRIEND </button> : ''} */}
            {requestSent ? <RequestSendButton> Request sent </RequestSendButton> : <AddFriendButton onClick={() => handleFriendClick(user.id)}>Add Friend</AddFriendButton> }
        </UserCardContainer>
    )
}
export default UserCard
