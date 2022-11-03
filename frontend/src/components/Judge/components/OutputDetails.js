import React from "react";
import styled from "styled-components";

// STYLED COMPONENTS -start

const Div1 = styled.div`
    display: flex; 
    margin-top: 1rem; 
    margin-top: 0.75rem; 
    margin-top: 0.875rem; 
    flex-direction: column; 
`;
const P1 = styled.p`
    font-size: 0.875rem;
    line-height: 1.25rem; 
`;
const Span1 = styled.span`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
    background-color: #F3F4F6; 
    font-weight: 600; 
    border-radius: 0.375rem; 

`;


// STYLED COMPONENTS -end
const OutputDetails = ({ outputDetails }) => {
  return (
    <Div1>
      <P1>
        Status:{" "}
        <Span1>
          {outputDetails?.status?.description}
        </Span1>
      </P1>
      <P1>
        Memory:{" "}
        <Span1>
          {outputDetails?.memory}
        </Span1>
      </P1>
      <P1>
        Time:{" "}
        <Span1>
          {outputDetails?.time}
        </Span1>
      </P1>
    </Div1>
  );
};

export default OutputDetails;