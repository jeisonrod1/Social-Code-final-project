import React from "react";
import styled from "styled-components";


// STYLED COMPONENTS -start

const Pre1 = styled.pre`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
    color: #EF4444; 
    font-size: 0.75rem;
    line-height: 1rem; 
    font-weight: 400; 
`;
const H1 = styled.h1`
    margin-bottom: 0.5rem; 
    background-clip: text; 
    background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops)); 
    color: transparent; 
    font-size: 1.25rem;
    line-height: 1.75rem; 
    font-weight: 700; 
`;
const Div1 = styled.div`
    overflow-y: auto; 
    color: #ffffff; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 400; 
    width: 100%; 
    height: 14rem; 
    border-radius: 0.375rem; 
    background: #1e293b;
`;


// STYLED COMPONENTS -end
const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <Pre1>
          {atob(outputDetails?.compile_output)}
        </Pre1>
      );
    } else if (statusId === 3) {
      return (
        <Pre1>
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </Pre1>
      );
    } else if (statusId === 5) {
      return (
        <Pre1 >
          {`Time Limit Exceeded`}
        </Pre1>
      );
    } else {
      return (
        <Pre1>
          {atob(outputDetails?.stderr)}
        </Pre1>
      );
    }
  };
  return (
    <>
      <H1>
        Output
      </H1>
      <Div1>
        {outputDetails ? <>{getOutput()}</> : null}
      </Div1>
    </>
  );
};

export default OutputWindow;