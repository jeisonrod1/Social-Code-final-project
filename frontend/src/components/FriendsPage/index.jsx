import React, { useEffect, useState } from "react"
import Footer from "../Footer"
import Navigation from "../Navigation"
import { UsersListContainer } from "./styled"
import UserPageCard from "./userCard";



const UsersID = () => {
    const [user, setUsers] = useState([])
    const [url, setURL] = useState(localStorage.getItem('url'))

    useEffect(() => {
        fetchUser()
    }, [])



    const fetchUser = () => {
        var myHeaders = new Headers()
        myHeaders.append("Cookie", "csrftoken=P5a0t1xsSr5oyG3RWjUVpWo4BCzKYNkF")

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        }

        fetch(
            url,
            requestOptions
        )
            .then(response => response.json())
            .then(result => setUsers(result))
            .catch(error => console.log("error", error))
    }

    return (
        <>
            <Navigation />
            <UsersListContainer>
                    <UserPageCard user={user} key={user.id} />
            </UsersListContainer>
            <Footer />
        </>
    )
}

export default UsersID
