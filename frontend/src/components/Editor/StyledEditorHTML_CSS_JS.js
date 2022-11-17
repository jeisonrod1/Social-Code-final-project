import styled from "styled-components";
import theme from "../../style/index";

// example ${sc => sc.theme.}
/* Editor HomePage */
export const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* color: ${c => c.theme.purple} */
  height: 100vh;
`;

export const EnterCartWrapper = styled.div`
  background: ${sc => sc.theme.backgroundBlackLight};

  /* background: rgba(126, 126, 126, 0.12); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;

  &&:hover {
    box-shadow: ${sc => sc.theme.boxShadowDark};
  }
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

export const MainLabelH4 = styled.h4`
  margin-bottom: 20px;
  margin-top: 0;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageLogo = styled.img`
  height: 50px;
  margin-bottom: 10px;
  /* object-fit: cover; */
`;

export const InputBox = styled.div`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 14px;
  background: #eee;
  font-size: 16px;
  font-weight: bold;
`;

export const Btn = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
export const JoinBtn = styled.button`
  background: ${sc => sc.theme.purpleLight};
  width: 100px;
  border: 20px solid black;
  /* margin: 0 auto; */
  /* margin-top: auto; */
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &&:hover {
    background: ${sc => sc.theme.backgroundBlackLight};
    box-shadow: ${sc => sc.theme.boxShadowDark};
  }
`;

// backgroundBlackLight
// borderRadiusM
// boxShadowDark
// boxShadowLight
// boxShadowLighter
// transitionNormal
export const CreateInfo = styled.div`
  /* margin: 0 auto; */
  margin-top: 85px;

  && a {
    margin-left: 5px;
    color: white;
    text-decoration: none;
    border-bottom: 1.45px solid ${sc => sc.theme.purpleLight};
    transition: all 0.3s ease-in-out;
  }
  && a:hover {
    border-bottom: 1.45px solid ${sc => sc.theme.purpleDark};
  }
`;
export const CreateNewBtn = styled.button`
  color: #4aed88;
  text-decoration: none;
  border-bottom: 1px solid #4aed88;
  transition: all 0.3s ease-in-out;

  && :hover {
    color: #368654;
    border-color: #368654;
  }
`;
export const LeaveBtn = styled.button`
  background: ${sc => sc.theme.purpleLight};
  width: 100px;
  margin-left: auto;
  margin-top: 20px;
  && :hover {
    background: #2b824c;
  }
`;

export const EditorMainWrap = styled.div`
  /* display: grid;
  grid-template-columns: 230px 1fr; */
  display: flex;
  width: 100vw;
  height: 90vh;
`;

export const Aside = styled.aside`
  background: #1c1e29;
  padding: 16px;
  color: #fff;
  display: flex;
  width: 19.5%;
  flex-direction: column;
`;

export const EditorPageWrap = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  /* flex: 1; */
`;
export const AsideInner = styled.div`
  flex: 1;
  button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

export const CoppyBttn = styled.button``;

export const ClientsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const UserClients = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  && img {
    object-fit: contain;
    height: 50px;
    border-radius: 8px;
  }
`;

export const UserName = styled.span`
  margin-top: 10px;
  border: 20px solid black;
`;

export const Logo = styled.div`
  border-bottom: 1.45px solid ${sc => sc.theme.purpleLight};
  padding-bottom: 10px;
`;

export const LogoImage = styled.img`
  height: 28.3px;
`;

// Styled Editor Wrappers

/* Editor */
export const TopPane = styled.div`
  /* background-color: hsl(225, 6%, 25%); */
`;

export const Pane = styled.div`
  height: 50vh;
  /* background-color: hsl(225, 6%, 25%); */
  display: flex;
`;

export const EditorContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  max-width: 500px;
  height: 100% !important;
`;

export const EditorContainerOpened = styled.div`
  flex-grow: 0;
`;

export const CodeMirrorScroll = styled.div``;

export const EditorContainerCollapsed = styled.div`
  flex-grow: 1;
  position: absolute;
  /* overflow: auto !important; */
  /* 
    && CodeMirrorScroll {
        
    } */
`;

export const ExpandCollapseBtn = styled.button`
  margin-left: 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const EditorTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${sc => sc.theme.purpleDark};
  font-weight: bold;
  color: white;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const CodemirrorContainer = styled.div`
  max-width: 60vw;
  min-width: 10px;
  height: 100%;
  /* border: 2.5px solid red; */
`;

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
`;
