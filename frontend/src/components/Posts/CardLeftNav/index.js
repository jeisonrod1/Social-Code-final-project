import React from "react";
import styled from "styled-components";
import MagnifierIcon from "../../../images/icons/svgs/magnifier.svg"

// STYLED COMPONENTS -start

const QCard = styled.div`
  margin: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;
  h1{
    font-size: 20px;
    font-weight: 500;
    margin: 12px 6px;
  }
  form{
    width: 100%;
    height: 32px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    
    input{
      font-size: 14px;
      width: 100%;
      padding: 8px 0 8px 14px;
      outline: none;
      color: #212121;
      border: none;

    }
    button{
      width: 18px;
      height: 100%;
      margin:0;
      border-radius:50%;
      border: none;
      img{
        width: 18px;
        position: relative;
        bottom: 1px;
        right: 10px;
        transform: scaleX(-1);
      }
    }
  }
`
// STYLED COMPONENTS -end

const CardLeftNav = () => {
  const handleClick = (evt) => {
    evt.preventDefault();
  }
  return (
    <QCard>
      <h1>Search</h1>
      <form>
        <input type="text" placeholder="Find a solution" className="search-button"/>
        <button type="submit" onClick={handleClick}>
          <img src={MagnifierIcon} alt="magnifier glass icon" />
        </button>
      </form>
    </QCard>
  );
};
export default CardLeftNav;
