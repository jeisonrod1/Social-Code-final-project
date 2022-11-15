import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './profileeditcard.css';

const Registration = () => {

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
                                <input value={''} onChange={e => console.log(e)} id='PEfirstname' className='PEfirstname' type='text'></input>
                                <label htmlFor="PEemail">Email</label>
                                <input value={''} onChange={e => console.log(e)} id='PEemail' className='PEemail' type='text'></input>
                                <label htmlFor="PElocation">Location</label>
                                <input value={''} onChange={e => console.log(e)} id='PElocation' className='PElocation' type='text'></input>
                                <label htmlFor="PEabout">About</label>
                                <textarea value={''} onChange={e => console.log(e)} id='PEabout' className='PEabout' type='textarea' rows={3}></textarea>
                            </div>
                            <div className="topRight">
                                <label htmlFor="PElastname">Last name</label>
                                <input value={''} onChange={e => console.log(e)} id='PElastname' className='PElastname' type='text'></input>
                                <label htmlFor="PEusername">Username</label>
                                <input value={''} onChange={e => console.log(e)} id='PEusername' className='PEusername' type='text'></input>
                                <label htmlFor="PEphone">Phone</label>
                                <input value={''} onChange={e => console.log(e)} id='PEphone' className='PEphone' type='number'></input>
                                <label htmlFor="PEpassword">Password</label>
                                <input value={''} id='PEpassword' className='PEpassword' type='password'></input>
                            </div>
                        </div>
                    </form>
                    <div className="cardRightBottom">
                        <h1>Things I like</h1>
                        <div className="tagsContainer">
                        </div>
                        <div className="PEinterests">
                            <form  id='tagform' onSubmit={e => console.log(e)}>
                                <input placeholder="Type something..." className="interestsList" onChange={(e) => console.log(e)}></input>
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
