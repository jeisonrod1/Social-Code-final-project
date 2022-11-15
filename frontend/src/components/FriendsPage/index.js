import { useEffect, useState } from "react"
import UserCard from "../UserCard"

const FriendsPage = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetchFriends()
    }, [])

    const fetchFriends = () => {
        var myHeaders = new Headers()
        myHeaders.append("Authorization", localStorage.getItem("auth"))
        myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF")

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        }

        fetch("https://code-media.propulsion-learn.ch/backend/friends/", requestOptions)
            .then(response => response.json())
            .then(result => setFriends(result))
            .catch(error => console.log("error", error))
    }

    return (
        <>
            {friends.map(friend => (
                <UserCard user={friend} key={friend.id} />
            ))}
        </>
    )
}

export default FriendsPage
