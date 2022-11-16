import styled from "styled-components";


export const ButtonsContainer = styled.div`
    display: flex;
`;

export const ExpandPostButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  button {
    border-radius: 30px;
    width: 200px;   
    
    display: flex;
    span {
      font-size: 15px;
    }
  }
`;