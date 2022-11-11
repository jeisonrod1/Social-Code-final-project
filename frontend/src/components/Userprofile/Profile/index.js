import styled from "styled-components";
import "./index.styled";
import ProfileAvatar from "../../../images/users/profile-face.png";
import {
  ProfilePage,
  UserHeader,
  ProfilePicture,
  UserInfo,
  UserName,
  UserOccupation,
  UserLocation,
  UserEmail,
  StatsContainer,
  StatsTitle,
  StatsContent,
  Reputation,
  Reached,
  Answers,
  Questions,
  AboutContainer,
  AboutTitle,
  About,
} from "./index.styled";
import ProfileBadges from "../ProfileBadges";
import TopPosts from "../TopPosts";
// Manu's imports ------------------------------------------

//
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// STYLED COMPONENTS -start

const ExampleComponent = styled.div``;

// STYLED COMPONENTS -end

const Userprofile = () => {
  // creating local states to control the input fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // Using Redux
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  const currentToken = useSelector(state => state.loginData.token);

  useEffect(() => {
    const url =
      "https://code-media.propulsion-home.ch/backend/api/social/users/me/";
    // const url = "http://localhost:8001/backend/api/social/users/me/";

    const tokenUser = localStorage.getItem("auth");
    const tokenJsObject = JSON.parse(tokenUser);

    const config = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${tokenJsObject.token}`,
      }),
    };

    fetch(url, config)
      .then(response => response.json())
      .then(data => setUserData(data), console.log(userData));
  }, []);

  // handle inputs
  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  // // Handle Submit
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const url = "http://localhost:8001/backend/api/social/users/me/";
  //   const tokenFromLs = localStorage.getItem("auth");
  //   const tokenJsObject = JSON.parse(tokenFromLs);

  //   const jsBody = {
  //     email: email,
  //     password: password,
  //   };

  //   const config = {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //     body: JSON.stringify(jsBody),
  //   };

  //   fetch(url, config)
  //     .then(response => {
  //       console.log(response);
  //       if (response.status === 200) {
  //         console.log("fetch worked");
  //         const json = response.json();
  //         return json;
  //       } else {
  //         console.log(response.json());
  //       }
  //     })
  //     .then(data => {
  //       setToken(data.access);
  //       console.log(token);
  //     });
  // };

  // useEffect(() => {
  //   const jsObject = {
  //     lunaToken: token,
  //   };
  //   if (token) {
  //     localStorage.setItem("auth", JSON.stringify(jsObject));
  //     console.log("the token was stored to local storage");
  //     navigate("/");
  //   }
  // }, [token]);

  // const userID = useParams().userID;

  // const fetchUserProfile = () => {
  //   fetch(
  //     // "https://code-media.propulsion-learn.ch/backend/api/social/users/me/" +
  //     "http://localhost:8001/backend/api/social/users/me/" + userID,
  //     makeConfigNoAuth("GET")
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log("set current user");
  //       console.log(data);
  //       // setCurrentUserStatus(data);
  //       // console.log(data.image);
  //       // reviewUser(userID);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       console.log("---eror from restaurant page---");
  //     });
  // };
  // useEffect(() => {
  //   fetchUserProfile();
  // }, []);

  return (
    <ProfilePage>
      <UserHeader>
        <ProfilePicture src={ProfileAvatar} />
        <UserInfo>
          <UserName>Victor Kaufmann</UserName>
          <UserOccupation>Software Engineer</UserOccupation>
          <UserLocation>Zürich, CH.</UserLocation>
          <UserEmail>victor.fmann@gmail.com</UserEmail>
        </UserInfo>
      </UserHeader>
      <StatsContainer>
        <StatsTitle>Stats</StatsTitle>
        <StatsContent>
          <Reputation>113 Reputation</Reputation>
          <Reached>4k Reached</Reached>
          <Answers>1 Answers</Answers>
          <Questions>9 Questions</Questions>
        </StatsContent>
      </StatsContainer>
      <AboutContainer>
        <AboutTitle>About</AboutTitle>
        <About>
          I am a computer science graduate and a programmer, I like to take up
          projects for learning 😅 , kinds geeky, and trying to get my hands in
          python.
        </About>
      </AboutContainer>
      <div></div>
      <ProfileBadges />
      <div></div>
      <TopPosts />
    </ProfilePage>
  );
};
export default Userprofile;
