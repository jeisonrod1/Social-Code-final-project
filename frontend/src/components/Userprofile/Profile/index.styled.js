import styled from "styled-components";

export const ProfilePage = styled.div`
  padding: 100px 120px;
  width: 100vw;
  /* height: 1500px; */
  display: grid;
  color: white;
  grid-template-columns: 208px 1fr;
  grid-template-rows: 156px 156px 340px 227px;
  gap: 20px;
  overflow: scroll
`;

export const UserHeader = styled.div`
  display: flex;
  gap: 25px;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const ProfilePicture = styled.img`
  width: 156px;
  height: 156px;
`;

export const UserInfo = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  width: 200px;
  height: 100%;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  font-size: 1.5em;
  width: 100%;
`;

export const UserOccupation = styled.div`
  width: 300px;
`;
export const UserLocation = styled.div`
  width: 300px;
`;
export const UserEmail = styled.div`
  width: 300px;
`;

export const StatsContainer = styled.div`
  width: 208px;
  height: 150px;
  background-color: #1e1f26;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const StatsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;
`;
export const StatsTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 8px 20px;
`;

export const Reputation = styled.div`
  width: 70px;
`;
export const Reached = styled.div`
  width: 70px;
`;
export const Answers = styled.div`
  width: 70px;
`;
export const Questions = styled.div`
  width: 70px;
`;
export const AboutContainer = styled.div`
  width: 900px;
`;
export const AboutTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
export const About = styled.div`
  width: 100%;
`;


// export const = styled.div`

// `;
// export const = styled.div`

// `;
// export const = styled.div`

// `;
// export const = styled.div`

// `;
// export const = styled.div`

// `;
