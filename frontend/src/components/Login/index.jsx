import {
  LoginContainer,
  Slogan,
  RightContainer,
  LeftContainer,
  LogoNavigationLogin,
  InvitationContainer,
  LoginForm,
  SocialMediaIconsContainer
} from "./index.styled.jsx";
import IconFB from "../../images/icons/icon/facebook.png"
import IconTW from "../../images/icons/icon/twitter.png"
import IconIG from "../../images/icons/icon/instagram.png"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from "../../images/logos/social_code_logo.webp"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(localStorage.getItem('auth'))
    const navigate = useNavigate()

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const jsBody = {
            "email": email,
            "password": password,
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody)
        }
        fetch("https://code-media.propulsion-learn.ch/backend/auth/token/", config)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("auth", `Bearer ${data.access}`)
                setToken(`Bearer ${data.access}`)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
      if (token) {
          console.log("the token was stored to local storage");
          navigate("/posts")
      }


    }, [token]);


  return (
    <LoginContainer>

      <LeftContainer>
        <LogoNavigationLogin src={logo}/>
        <Slogan>Connecting <b>developers</b> around the globe</Slogan>
      </LeftContainer>

      <RightContainer>

        <LoginForm onSubmit={handleSubmit}>
          <h2>Hello, SocialCoder</h2>
          
            <label>
              <h3>email</h3>
              <input type="email" onChange={handleEmailChange}/>
            </label>
          
            <label>
              <h3>Password</h3>
              <input
                type="password"
                onChange={handlePasswordChange}
              />
            </label>
        
          <button>Log in</button>

        </LoginForm>

        <InvitationContainer onClick={()=>navigate("/registration")}>
          No Account? Do you have the code?
        </InvitationContainer>

        <SocialMediaIconsContainer>
            <a href="https://www.facebook.com"><img src={IconFB}/></a>
            <a href="https://www.twitter.com"><img src={IconTW}/></a>
            <a href="https://www.instagram.com"><img src={IconIG}/></a>
        </SocialMediaIconsContainer>

      </RightContainer>
    </LoginContainer>
  )
}

export default Login;
