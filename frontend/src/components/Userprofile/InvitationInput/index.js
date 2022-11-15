import React, {useState} from 'react'
import styled from "styled-components"


    //Start styled-components

    const ComponentContainer = styled.div`
        width: 100vw;
        margin: 200px auto;
    `
    const InvitationForm = styled.form`
    display: flex;
    justify-content:center;
    align-items:center;

    input{
        height: 30px;
        width: 220px;
        padding: 0 10px;
        margin: 0 12px 0 20px;
        outline: none;
    }
    button{
        border-radius: 12px;
    }

    `
const InvitationInput = () => {

    const [token, setToken] = useState(localStorage.getItem('auth'))
    const [email, setEmail] = useState("")


    const handleEmailChange = e => setEmail(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const jsBody = {
            email: email,
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token,
            }),
            body: JSON.stringify(jsBody),
        }
        fetch("https://code-media.propulsion-learn.ch/backend/registration/", config)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

  return (
    <ComponentContainer>
        <InvitationForm onSubmit={handleSubmit}>
            <label>
                Invite friends
            </label>
            <input onChange={handleEmailChange} type="email" placeholder="enter your friend's email"/>
            <button type="submit" >
                Send link
            </button>
        </InvitationForm>
    </ComponentContainer>
  )
}

export default InvitationInput