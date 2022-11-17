import { useLocation } from "react-router-dom";
import {
  AddFriendButton,
  Avatar,
  CompanyLabel,
  Experience,
  LocationWrapper,
  ProfileCardContainer,
  LeftWrapper,
  RightWrapper,
  Stats,
  Info
} from "./styled";
import avatar_placeholder from "../../images/logos/logo-color.png";
import location_icon from "../../images/icons/svgs/location.svg";

const ProfileCard = ({ user }) => {


  return (
    <ProfileCardContainer key={user.id}>
      <LeftWrapper>
        <Avatar>
          <img src={user.avatar ? user.avatar : avatar_placeholder} />
        </Avatar>

        <h1>
          {user.first_name} {user.last_name}
        </h1>
        <Experience>{user.experience}</Experience>
        <CompanyLabel>{user.company}</CompanyLabel>
        <LocationWrapper>
          <img src={location_icon} />
          {user.location}
        </LocationWrapper>


      </LeftWrapper>
      <RightWrapper>
        <Info>
            <h6>About</h6>
            <h6>
            {user.first_name} {user.last_name}
            </h6>
            <h6>Things i like</h6>
            <h6>{user.email}</h6>
            <h6>{user.phone}</h6>
            <Experience>{user.experience}</Experience>
            <CompanyLabel>{user.company}</CompanyLabel>
            <LocationWrapper>
            <img src={location_icon} />
            {user.location}
            </LocationWrapper>
        </Info>
        <Stats>
            <h6>Points</h6>
            <h6>{user.points}</h6>
            <h6>Posts</h6>
            <h6>{user.amount_of_posts}</h6>
            <h6>Friends</h6>
            <h6>{user.amount_of_friends}</h6>
            <h6>Following</h6>
            <h6>{user.amount_following}</h6>
        </Stats>
      </RightWrapper>
    </ProfileCardContainer>
  );
};
export default ProfileCard;
