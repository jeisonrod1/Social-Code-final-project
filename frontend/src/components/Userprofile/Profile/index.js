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
import BgImage from "../../../images/covers/background-login.jpg";
import InvitationInput from "../InvitationInput";


const Userprofile = () => {
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [user, setUser] = useState("");


  const fetchProfile = () => {
    const url = "https://code-media.propulsion-learn.ch/backend/api/social/users/me/";

  const fetchProfile = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token)
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(url, config)
      .then(response => response.json())
        .then(result => setUser(result))
        .catch(error => console.log('error', error));
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  return (
    <ProfilePage src={BgImage}>
      <BackgroundImg src={BgImage} />
      <UserHeader>
        <ProfilePicture src={ProfileAvatar} />
        <UserInfo>
          <UserName>{user.username}</UserName>
          <UserOccupation>Software Engineer</UserOccupation>
          <UserLocation>{user.location}</UserLocation>
          <UserEmail>{user.email}</UserEmail>
        </UserInfo>
        <ProfileBadges />
      </UserHeader>
      <StatsContainer>
        <StatsTitle>Stats</StatsTitle>
        <StatsContent>
          <Reputation>{user.points} Points</Reputation>
          <Reached>{user.amount_of_posts} Posts</Reached>
          <Answers>{user.amount_of_friends} Friends</Answers>
          <Questions>{user.amount_following} Followers</Questions>
        </StatsContent>
      </StatsContainer>
      <AboutContainer>
        <AboutTitle>About</AboutTitle>
        <About>{user.about_me}</About>
      </AboutContainer>
      <InvitationInput/>
    </ProfilePage>
  );
}

export default Userprofile;
