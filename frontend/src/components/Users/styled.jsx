import styled from "styled-components";


export const UsersContainer = styled.div`
    height: 100%;
    width: 60%;
    display: grid;
    padding: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    margin: 0 auto;
    padding-top: 100px;
`



export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* min-height: 100vh;
min-width: 100vw; */
  margin: 0px;
  padding-bottom: 50px;
`;

export const Main = styled.div`
  /* background-color: purple; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background-color: lightgray; */
`;


export const BeingGrinded = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-image: url("../../../images/covers/bg_transparent_50.png") !important;
  width: 95%;
  border-radius: 14px;
  height: 100%;
`;

export const BeingFlexed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  text-align: center;
  object-fit: contain;
  .light & {
    background-color: lightblue;
  }
  .dark & {
    background-color: #2e3138;
  }
  background-color: white;
  background-image: url("../../../images/covers/bg_transparent_50.png") !important;
  padding: 50px 30px;
  align-items: center;
  border-radius: 14px;
  height: 45%;

  img {
    margin-top: -20px;
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const UpperPart = styled.div`
  /* display: flex; */
  /* flex-direction: column; */

  button {
    border: none;
  }
`;
export const FullName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const StylingP = styled.p`
  font-size: 10px;
`;

export const Located = styled.p`
  font-size: 12px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowBtn = styled.button`
  padding: 12px 45px;
  border: 1px solid gray;
  border-radius: 35px;
  margin-right: 2.5px;
  font-size: 13px;
  max-width: 110px;
  white-space: nowrap;
  margin-right: 2.5px;
`;
export const UnfollowBtn = styled.button`
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  white-space: nowrap;
  padding: 12px 45px;
  border: 1px solid gray;
  border-radius: 35px;
  background-color: white;
  font-size: 13px;
  white-space: nowrap;
  font-weight: 500;
`;

export const AddFriendBtn = styled.button`
  padding: 12px 45px;
  border: 1px solid gray;
  border-radius: 35px;
  background-color: white;
  font-size: 13px;
  white-space: nowrap;
  font-weight: 500;
  margin-left: 15px;
`;

export const FriendBtw = styled.button`
  padding: 12px 45px;
  border: 1px solid gray;
  border-radius: 35px;
  background-color: white;
  font-size: 13px;
  white-space: nowrap;
  font-weight: 500;
  position: relative;
  text-align: end;
  display: flex;
  align-self: center;
  justify-content: left;
`;

export const Follow_add_friend_btn_container = styled.div`
  position: relative;
  margin-left: 15px;

  img {
    width: 20px;
    position: absolute;
    bottom: 12px;
    left: 14px;
  }
`;

export const Context = styled.p`
  margin-top: 0px;
  /* max-width: 80%; */
  width: fit-content;
  line-height: 25px;
  text-align: center;
  font-weight: 500;
`;

export const Hobbies = styled.button`
  padding: 6px 17px;
  font-size: 12px;
  border: none;
  border-radius: 20px;
  margin: 3px;
  font-weight: 500;
`;

export const HobbiesDiv = styled.div`
  /* display: gird; */
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 1fr; */
  /* max-width: 250px; */
  // background-color: green;
  margin-top: 15px;
`;

export const RoundButtonImages = styled.button`
  /* border: none; */
  padding: 30px;
  border-radius: 100%;
`;
