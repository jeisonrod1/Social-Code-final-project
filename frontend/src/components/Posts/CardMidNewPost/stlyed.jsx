import styled from "styled-components";


export const ButtonsContainer = styled.div`
    display: flex;
`;

export const ExpandPostButtons = styled.button`
  height: 30px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin: 0;
  
  border: solid 1px lightgrey;
  border-radius: ${props => props.theme.borderRadiusXL};
  font-size: ${props => props.theme.fontSizeS};
  
  :hover {
    cursor: pointer;
  }

`;