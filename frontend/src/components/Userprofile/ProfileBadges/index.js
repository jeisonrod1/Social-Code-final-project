import React from 'react'
import GoldBadge from '../../../images/badges/Gold.png'
import {  
    BadgesContainer,
    BadgesContent,
    BadgeTop,
    Badges,
    AllBadges,
    BadgeContainer,
    BadgeImgContainer,
    BadgeImg,
    Badge,
    Score,
    BadgeType,
    BadgeInfo,
    Skill,
    Dot,
    DateAdded,
    Container,
  } from "./index.styled";

const ProfileBadges = () => {

  return (
    <BadgesContainer>
    <BadgesContent>
        <div>
        <BadgeTop>
            <Badges>Badges</Badges>
            <AllBadges>View all badges</AllBadges>
        </BadgeTop>
        </div>
      <Container>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={GoldBadge} />
            <Badge>
              <Score>78</Score>
              <BadgeType>Gold badges</BadgeType>
            </Badge>
          </BadgeImgContainer>
          <BadgeInfo>
            <Skill>
              {" "}
              <Dot></Dot> Marshal
            </Skill>
            <DateAdded>Apr 24, 2014</DateAdded>
          </BadgeInfo>
          <BadgeInfo>
            <Skill>
              {" "}
              <Dot></Dot> Marshal
            </Skill>
            <DateAdded>Apr 24, 2014</DateAdded>
          </BadgeInfo>
        </BadgeContainer>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={GoldBadge} />
            <Badge>
              <Score>78</Score>
              <BadgeType>Gold badges</BadgeType>
            </Badge>
          </BadgeImgContainer>
          <BadgeInfo>
            <Skill>
              {" "}
              <Dot></Dot> Marshal
            </Skill>
            <DateAdded>Apr 24, 2014</DateAdded>
          </BadgeInfo>
          <BadgeInfo>
            <Skill>
              {" "}
              <Dot></Dot> Marshal
            </Skill>
            <DateAdded>Apr 24, 2014</DateAdded>
          </BadgeInfo>
        </BadgeContainer>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={GoldBadge} />
            <Badge>
              <Score>78</Score>
              <BadgeType>Gold badges</BadgeType>
            </Badge>
          </BadgeImgContainer>
          <BadgeInfo>
            <Skill>
              {" "}
              <Dot></Dot> Marshal
            </Skill>
            <DateAdded>Apr 24, 2014</DateAdded>
          </BadgeInfo>
          <BadgeInfo>
            <Skill>
              {" "}
              <Dot></Dot> Marshal
            </Skill>
            <DateAdded>Apr 24, 2014</DateAdded>
          </BadgeInfo>
        </BadgeContainer>
      </Container>
    </BadgesContent>
  </BadgesContainer>
  )
}

export default ProfileBadges