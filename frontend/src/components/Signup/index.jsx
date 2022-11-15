import {Slogan, RightContainer, LeftContainer, LogoNavigationLogin,InvitationContainer,SocialMediaIconsContainer} from "./index.styled"
import IconFB from "../../images/icons/icon/facebook.png"
import IconTW from "../../images/icons/icon/twitter.png"
import IconIG from "../../images/icons/icon/instagram.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "../../images/logos/social_code_logo.webp"
import { SignupContainer } from "./index.styled"
import { SignupForm } from "./index.styled"


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const navigate = useNavigate()

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const jsBody = {
            email: email,
            password: password,
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody),
        }
        fetch("https://code-media.propulsion-learn.ch/backend/auth/token/", config)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("auth", data.access)
                setToken(data.access)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (token) {
            localStorage.setItem("auth", `Bearer ${token}`)
            console.log("the token was stored to local storage")
            navigate("/posts")
        }
    }, [token])

    return (
        <SignupContainer>

            <LeftContainer>
                <SignupForm onSubmit={handleSubmit}>
                    <h2>Enter the code here</h2>

                    <label>
                        <h3>code</h3>
                        <input type="email" onChange={handleEmailChange} />
                    </label>

                    <button>Sign up</button>
                </SignupForm>

                <InvitationContainer onClick={() => navigate("/login")}>
                    Account already? Log in here
                </InvitationContainer>

                <SocialMediaIconsContainer>
                    <a href="https://www.facebook.com">
                        <img src={IconFB} />
                    </a>
                    <a href="https://www.twitter.com">
                        <img src={IconTW} />
                    </a>
                    <a href="https://www.instagram.com">
                        <img src={IconIG} />
                    </a>
                </SocialMediaIconsContainer>
            </LeftContainer>

            <RightContainer>
                <LogoNavigationLogin src={logo} />
                <Slogan>
                    Do you have the <b>code?</b> access only by invitation
                </Slogan>
            </RightContainer>
        </SignupContainer>
    )
}

export default Signup
