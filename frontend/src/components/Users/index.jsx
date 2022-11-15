import React, { useEffect, useState } from "react"
import Footer from "../Footer"
import Navigation from "../Navigation"
import UserCard from "../UserCard"
import { UsersContainer } from "./styled"


const Users = () => {
    const [users, setUsers] = useState([])
    let token = localStorage.getItem("auth")

    useEffect(() => {
        fetchFriends()
    }, [])

    console.log(users && users)

    const fetchFriends = () => {
        var myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF")

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        }

        fetch(
            "https://code-media.propulsion-learn.ch/backend/api/social/users/list/",
            requestOptions
        )
            .then(response => response.json())
            .then(result => setUsers(result))
            .catch(error => console.log("error", error))
    }

    return (
        <>
            <Navigation />
            <UsersContainer>
                {users.map(user => (
                    <UserCard user={user} key={user.id} />
                ))}
            </UsersContainer>
            <Footer />
        </>
    )
}

export default Users
