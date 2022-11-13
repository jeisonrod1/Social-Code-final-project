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
        </BadgeContainer>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={GoldBadge} />
            <Badge>
              <Score>78</Score>
              <BadgeType>Gold badges</BadgeType>
            </Badge>
          </BadgeImgContainer>
        </BadgeContainer>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={GoldBadge} />
            <Badge>
              <Score>78</Score>
              <BadgeType>Gold badges</BadgeType>
            </Badge>
          </BadgeImgContainer>
        </BadgeContainer>
      </Container>
    </BadgesContent>
  </BadgesContainer>
  )
}

export default ProfileBadges