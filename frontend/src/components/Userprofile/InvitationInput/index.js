import React from 'react'
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

    const handleClick = (evt) => evt.preventDefault()


  return (
    <ComponentContainer>
        <InvitationForm>
            <label>
                Invite friends
            </label>
            <input type="email" placeholder="enter your friend's email"/>
            <button type="submit" onClick={handleClick}>
                Send link
            </button>
        </InvitationForm>
    </ComponentContainer>
  )
}

export default InvitationInput