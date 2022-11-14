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

// STYLED COMPONENTS -start

const ExampleComponent = styled.div``;

// STYLED COMPONENTS -end

const Userprofile = () => {
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const [username, setUsername] = useState("Jesus Christ");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("jesuschrist@heaven.com");
  const [location, setLocation] = useState("Zürich, CH");
  const [phone, setPhone] = useState("");
  const [about_me, setAbout_Me] = useState(
    "‘About Me’ isn’t a strong enough title. Your headline needs to not only describe the content on the page, but also pull your readers in and make them want to learn more. Keep it short and sweet, but punchy and personal."
  );
  const [avatar, setAvatar] = useState("");
  const [points, setPoints] = useState("");
  const [company, setCompany] = useState("");

  const fetchProfile = () => {
    const url =
      "https://code-media.propulsion-learn.ch//backend/api/social/users/me/";

    const config = {
      method: "GET",
      headers: new Headers({
        Autorization: `Bearer ${token}`,
      }),
    };

    fetch(url, config)
      .then(response => {
        if (response.status === 200) {
          const data = response.json();
          setUsername(data.get("username"));
          setFirst_Name(data.get("first_name"));
          setLast_Name(data.get("last_name"));
          setEmail(data.get("email"));
          setLocation(data.get("location"));
          setPhone(data.get("phone"));
          setAbout_Me(data.get("about_me"));
          setAvatar(data.get("avatar"));
          setPoints(data.get("points"));
          setCompany(data.get("company"));
        } else {
          console.log(response.json());
        }
      })
      .then(data => {
        setToken(data.access);
        console.log(token);
      });
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
      <div></div>
      {/* <ProfileBadges/> */}
      <div></div>
    </ProfilePage>
  );
};
export default Userprofile;
