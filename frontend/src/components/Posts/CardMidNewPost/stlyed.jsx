import styled from "styled-components";


export const ButtonsContainer = styled.div`
    display: flex;
`;

export const ExpandPostButtons = styled.button`
  height: 30px;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 110px;
  border: solid 1px lightgrey;
  //border: 1px solid grey;
  border-radius: ${props => props.theme.borderRadiusXL};
  font-size: ${props => props.theme.fontSizeS};
  
  :hover {
    cursor: pointer;
  }

`;