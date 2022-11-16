import React, { useEffect, useState } from "react"
import Footer from "../Footer"
import Navigation from "../Navigation"
import ProfileCard from "../ProfileCard"
import { UsersListContainer } from "./styled"


const Userprofile = () => {
    const [user, setUsers] = useState([])
    const token = localStorage.getItem("auth")

    useEffect(() => {
        fetchUser()
    }, [])



    const fetchUser = () => {
        var myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF")

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        }

        fetch(
            "https://code-media.propulsion-learn.ch/backend/api/social/users/me/",
            requestOptions
        )
            .then(response => response.json())
            .then(result => setUsers(result[0]))
            .catch(error => console.log("error", error))
    }

    return (
        <>
            <Navigation />
            <UsersListContainer>
                    <ProfileCard user={user} key={user.id} />
            </UsersListContainer>
            <Footer />
        </>
    )
}

export default Userprofile
