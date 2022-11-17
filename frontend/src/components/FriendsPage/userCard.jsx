import location_icon from "../../images/icons/svgs/location.svg";
import {Info, LeftWrapper, ProfileCardContainer, RightWrapper, Stats} from "../ProfileCard/styled";
import {CompanyLabel, Experience, LocationWrapper} from "../UserCard/styled";
import {AvatarUsers} from "./styled";



const UserPageCard = ({ user }) => {


  return (
      <>
      {user ? <ProfileCardContainer print={console.log(user)} key={user.id}>
      <LeftWrapper>
        <AvatarUsers>
          <img src={user.avatar} />
        </AvatarUsers>

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
      </RightWrapper>
    </ProfileCardContainer>: null }
  </>
  );
};

export default UserPageCard;
