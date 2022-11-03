import React from "react";
import styled from "styled-components";


// STYLED COMPONENTS -start

const CustomeTextArea = styled.textarea`
    z-index: 10; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    margin-top: 0.5rem; 
    background-color: #ffffff; 
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; 
    transition-duration: 200ms; 
    width: 100%; 
    border-radius: 0.375rem; 
    border-width: 2px; 
    border-color: #000000; 

    :hover {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
         }
`;


// STYLED COMPONENTS -end

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <CustomeTextArea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
      ></CustomeTextArea>
    </>
  );
};

export default CustomInput;