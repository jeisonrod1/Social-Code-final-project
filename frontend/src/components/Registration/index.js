import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './profileeditcard.css';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [location, setLocation] = useState("")
    const [about_me, setAbout_me] = useState("")
    const [company, setCompany] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleUsernameChange = e => setUsername(e.target.value)
    const handleFirstNameChange = e => setFirstname(e.target.value)
    const handleLastNameChange = e => setLastname(e.target.value)
    const handleLocationChange = e => setLocation(e.target.value)
    const handleAboutMeChange = e => setAbout_me(e.target.value)
    const handleCompanyChange = e => setCompany(e.target.value)
    const handlePhoneChange = e => setPhone(e.target.value)


    const handleSubmit = e => {
        e.preventDefault()

        const jsBody = {
            email: email,
            password: password,
            username: username,
            first_name: firstname,
            last_name: lastname,
            location: location,
            about_me: about_me,
            company: company,
            phone: phone,

        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody),
        }
        fetch("https://code-media.propulsion-learn.ch/backend/registration/validation/", config)
            .then(response => response.json())
            .then(data => {console.log(data)})
            .catch(error => console.log(error))

        navigate("/login")
    }

    return (
        <div className="PEcardcontainer">
            <div className="PEcover">
                <img src={require('../../images/covers/right-background.jpeg')} />
            </div>
            <div className="editCard">
                <div className="editCardLeft">
                    <button className="PEdelete">DELETE ACCOUNT</button>
                    <button className="PEsave" form='userform' type="submit">SAVE</button>
                </div>
                <div className="editCardRight">
                    <form id='userform' >
                        <div className="cardRightTop">
                            <div className="topLeft">
                                <label htmlFor="PEfirstname">First name</label>
                                <input value={''} onChange={handleFirstNameChange} id='PEfirstname' className='PEfirstname' type='text'></input>
                                <label htmlFor="PEemail">Email</label>
                                <input value={''} onChange={handleEmailChange} id='PEemail' className='PEemail' type='text'></input>
                                <label htmlFor="PElocation">Location</label>
                                <input value={''} onChange={handleLocationChange} id='PElocation' className='PElocation' type='text'></input>
                                <label htmlFor="PEabout">About</label>
                                <textarea value={''} onChange={handleAboutMeChange} id='PEabout' className='PEabout' type='textarea' rows={3}></textarea>
                            </div>
                            <div className="topRight">
                                <label htmlFor="PElastname">Last name</label>
                                <input value={''} onChange={handleLastNameChange} id='PElastname' className='PElastname' type='text'></input>
                                <label htmlFor="PEusername">Username</label>
                                <input value={''} onChange={handleUsernameChange} id='PEusername' className='PEusername' type='text'></input>
                                <label htmlFor="PEphone">Phone</label>
                                <input value={''} onChange={handlePhoneChange} id='PEphone' className='PEphone' type='number'></input>
                                <label htmlFor="PEpassword">Password</label>
                                <input value={''} onChange={handlePasswordChange} id='PEpassword' className='PEpassword' type='password'></input>
                            </div>
                        </div>
                    </form>
                    <div className="cardRightBottom">
                        <h1>Company</h1>
                        <div className="tagsContainer">
                        </div>
                        <div className="PEinterests">
                            <form  id='tagform' onSubmit={handleSubmit}>
                                <input placeholder="" className="interestsList" onChange={handleCompanyChange}></input>
                                <button className="PEaddbutton" form='tagform' type="submit">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;
