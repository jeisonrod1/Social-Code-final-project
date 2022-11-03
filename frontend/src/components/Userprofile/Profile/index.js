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
  About
} from "./index.styled";
import ProfileBadges from "../ProfileBadges";
import TopPosts from "../TopPosts";

// STYLED COMPONENTS -start

const ExampleComponent = styled.div``;

// STYLED COMPONENTS -end

const Userprofile = () => {
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
    <ProfileBadges/>
    <div>
    </div>
    <TopPosts/>
    </ProfilePage>
  );
};
export default Userprofile;
