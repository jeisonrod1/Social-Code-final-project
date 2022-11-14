import React from 'react'
import GoldBadge from '../../../images/badges/Gold.png'
import SilverBadgeOne from "../../../images/badges/silver-1.png"
import SilverBadgeTwo from "../../../images/badges/silver-2.png"
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
              <Score>92</Score>
              <BadgeType>Gold badge</BadgeType>
            </Badge>
          </BadgeImgContainer>
        </BadgeContainer>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={SilverBadgeOne} />
            <Badge>
              <Score>68</Score>
              <BadgeType>Silver badge</BadgeType>
            </Badge>
          </BadgeImgContainer>
        </BadgeContainer>
        <BadgeContainer>
          <BadgeImgContainer>
            <BadgeImg src={SilverBadgeTwo} />
            <Badge>
              <Score>55</Score>
              <BadgeType>Silver badge</BadgeType>
            </Badge>
          </BadgeImgContainer>
        </BadgeContainer>
      </Container>
    </BadgesContent>
  </BadgesContainer>
  )
}

export default ProfileBadges