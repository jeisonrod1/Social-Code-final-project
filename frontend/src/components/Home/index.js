import styled from "styled-components";

// STYLED COMPONENTS -start

const ExampleComponent = styled.div`
  border: 1px solid green;
`;

// STYLED COMPONENTS -end

const Home = () => {
  return (
    <>
      <ExampleComponent>
        <p>
          This is HOME a nice react boilerplate - see comments in routes to find
          your name and what is assigned to you.
        </p>
      </ExampleComponent>
    </>
  );
};
export default Home;
