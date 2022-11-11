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
import {useEffect, useState} from "react";

// STYLED COMPONENTS -start

const ExampleComponent = styled.div``;

// STYLED COMPONENTS -end

const Userprofile = () => {
    const [token, setToken] = useState(localStorage.getItem("auth"))
    const [user, setUser] = useState("")
    const [avatar, setAvatar] = useState("")


    const fetchProfile = () => {

        const url = "http://localhost:8001/backend/api/social/users/me/"


        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": token
            })
        }

        fetch(url, config)
            .then((response) => {
                if (response.status === 200) {
                    let data = response.json();

                    return data
                }
            }).then(data => {


                    setUser(data[0]);

        })
    }
        console.log(user)

        useEffect(() => {
            fetchProfile()

        }, [token]);


        return (
            <ProfilePage>
                <UserHeader>
                    <ProfilePicture src={`https://code-media.propulsion-learn.ch/${user.avatar}`}/>
                    <UserInfo>
                        <UserName>{user.username}</UserName>
                        <UserOccupation>Software Engineer</UserOccupation>
                        <UserLocation>{user.location}</UserLocation>
                        <UserEmail>{user.email}</UserEmail>
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
                        {user.about_me}
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
