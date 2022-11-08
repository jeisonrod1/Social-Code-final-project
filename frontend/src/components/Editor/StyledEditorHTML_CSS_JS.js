import styled from "styled-components";

/* Editor HomePage */

export const homePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100vh;
`;

export const formWrapper = styled.form`
  background: #282a36;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
`;

export const footer = styled.div`
  position: fixed;
  bottom: 0;
  && a {
    color: #4aee88;
  }
  && :hover {
    color: #368654;
    border-color: #368654;
  }
`;

export const inputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const mainLabel = styled.div`
  margin-bottom: 20px;
  margin-top: 0;
`;

export const homePageLogo = styled.div`
  height: 80px;
  margin-bottom: 30px;
`;

export const inputBox = styled.div`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 14px;
  background: #eee;
  font-size: 16px;
  font-weight: bold;
`;

export const btn = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
export const joinBtn = styled.button`
  background: #4aed88;
  width: 100px;
  margin-left: auto;
`;
export const leaveBtn = styled.button`
  background: #4aed88;
  width: 100px;
  margin-left: auto;
  && :hover {
    background: #2b824c;
  }
`;

export const createInfo = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`;
export const createNewBtn = styled.button`
  color: #4aed88;
  text-decoration: none;
  border-bottom: 1px solid #4aed88;
  transition: all 0.3s ease-in-out;

  && :hover {
    color: #368654;
    border-color: #368654;
  }
`;

export const mainWrap = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
`;

export const aside = styled.aside`
  background: #1c1e29;
  padding: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
`;
export const asideInner = styled.div`
  flex: 1;
`;

export const clientsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const client = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
`;

export const userName = styled.div`
  margin-top: 10px;
`;

export const logo = styled.img`
  border-bottom: 1px solid #424242;
  padding-bottom: 10px;
`;

export const logoImage = styled.img`
  height: 45px;
`;

export const leaveBtn = styled.button`
  width: 100%;
  margin-top: 20px;
`;


// Styled Editor Wrappers

/* Editor */
export const TopPane = styled.div`
    background-color: hsl(225, 6%, 25%);

`

export const pane = styled.div`
    height: 50vh;
    background-color: hsl(225, 6%, 25%);
    display: flex;
`
  
export const EditorContainer = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: hsl(225, 6%, 25%);
    max-width: 500px;
    height: 100% !important;
`
  
export const EditorContainerOpened = styled.div`
    flex-grow: 0;

`

export const CodeMirrorScroll = styled.div``

export const EditorContainerCollapsed = styled.div`
    flex-grow: 1;
    position: absolute;
    /* overflow: auto !important; */
/* 
    && CodeMirrorScroll {
        
    } */
`

export const ExpandCollapseBtn = styled.button`
    margin-left: 1rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`

export const EditorTitle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: hsl(225, 6%, 13%);
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
`
  


export CodemirrorContainer = styled.div`
    max-width: 60vw;
    min-width: 10px;
    height: 100%;
    /* border: 2.5px solid red; */
`
  

export const CodeMirrorWrapper = styled.div`
    flex-grow: 1;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    overflow: auto;
    /* overflow-x: hidden; */
    /* overflow-y: auto; */
    height: 90% !important;
    /* width: 100% !important; */
    /* min-height: 110%; */
`

