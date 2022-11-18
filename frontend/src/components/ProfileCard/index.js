import {
    Avatar,
    CompanyLabel,
    Experience,
    LocationWrapper,
    ProfileCardContainer,
    LeftWrapper,
    RightWrapper,
    Stats,
    Info, InviteUser, InputField, InviteContainer
} from "./styled";
import avatar_placeholder from "../../images/logos/logo-color.png";
import location_icon from "../../images/icons/svgs/location.svg";
import {useState} from "react";


const ProfileCard = ({ user }) => {
    const [input, setInput] = useState("  Invite A Friend")
    const [requestSent, setRequestSent] = useState(true)

    const handleInputClick = (e) => {
        setInput("")
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleInvite = (e) => {
        setRequestSent(false)
        setInput("")

    }

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
        <div className="jobwrapper">
            <LocationWrapper>
                <img src={location_icon} />
                {user.location}
            </LocationWrapper>
        </div>


      </LeftWrapper>
      <RightWrapper>
        <Info>
            <h1 className="h1">About</h1>
            <h6>{user.about_me}</h6>
            <h6>Contact info:</h6>
               <h6>
            {user.first_name} {user.last_name}
            </h6>
            <h6>{user.email}</h6>
            <div className="jobwrapper">
                <h6>Current job:</h6>
                <CompanyLabel>{user.company}</CompanyLabel>
                <LocationWrapper>
                <img src={location_icon} />
                {user.location}
                </LocationWrapper>
            </div>
            <div className="jobwrapper">
                <h6>Linkedin:</h6>
                <h6>https://www.linkedin.com/in/tom/</h6>
            </div>
            <div className="jobwrapper">
                <h6>Github:</h6>
                <h6>https://github.com/peter</h6>
            </div>

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
          <InviteContainer>
              <InputField onClick={handleInputClick} onChange={handleInputChange} value={input} />
              {requestSent ? <InviteUser onClick={handleInvite}>Invite User</InviteUser> : <InviteUser>Invitation Send</InviteUser>}
          </InviteContainer>
          </RightWrapper>
    </ProfileCardContainer>
  );
};
export default ProfileCard;
