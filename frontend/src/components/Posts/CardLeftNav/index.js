import React from "react";
import styled from "styled-components";


// STYLED COMPONENTS -start

const QCard = styled.div`
  margin: 8px;
  width: 100%;
  height: 100%;
  background: 
  display: flex;
  justify-content: start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;
  .wrapper {
    display: flex;
  }
  .image {
    width: 150px;
    margin: 16px;
  }
  p,
  h5 {
    font-weight: 500;
  }
`;



// STYLED COMPONENTS -end

const CardLeftNav = () => {
  return (
    <QCard>

    </QCard>
  );
};
export default CardLeftNav;
