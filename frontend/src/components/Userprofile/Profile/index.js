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
  BackgroundImg,
} from "./index.styled";
import ProfileBadges from "../ProfileBadges";
import { useEffect, useState } from "react";
import axios from "axios";
import BgImage from "../../../images/covers/background-login.jpg";
import InvitationInput from "../InvitationInput";


const Userprofile = () => {
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [username, setUsername] = useState("Jesus Christ");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("jesuschrist@heaven.com");
  const [location, setLocation] = useState("Zürich, CH");
  const [phone, setPhone] = useState("");
  const [about_me, setAbout_Me] = useState(
    "Junior Developer, into gaming, coding addict, looking forward to have collaborations and develop interesting projects, also to help solve questions about Python, Javascript and React."
  );
  const [avatar, setAvatar] = useState("");
  const [points, setPoints] = useState("");
  const [company, setCompany] = useState("");


  const fetchProfile = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token)
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://code-media.propulsion-learn.ch/backend/api/social/users/me/", requestOptions)
    .then(response => response.json())
    .then(data => {
        setUsername(data[0].username);
        setFirst_Name(data[0].first_name);
        setLast_Name(data[0].last_name);
        setEmail(data[0].email);
        setLocation(data[0].location);
        setPhone(data[0].phone);
        setAbout_Me(data[0].about_me);
        setAvatar(data[0].avatar);
        setPoints(data[0].points);
        setCompany(data[0].company);
    })
    .catch(error => console.log('error', error));
    }

  useEffect(() => {
    fetchProfile();
  }, [token]);

  return (
    <ProfilePage src={BgImage}>
      <BackgroundImg src={BgImage} />
      <UserHeader>
        <ProfilePicture src={ProfileAvatar} />
        <UserInfo>
          <UserName>{username}</UserName>
          <UserOccupation>Software Engineer</UserOccupation>
          <UserLocation>{location}</UserLocation>
          <UserEmail>{email}</UserEmail>
        </UserInfo>
        <ProfileBadges />
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
        <About>{about_me}</About>
      </AboutContainer>
      <InvitationInput/>
    </ProfilePage>
  );
}

export default Userprofile;
