import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 1000px;
  height: 550px;
  padding: 15px;
  background-color: #000;
`;
export const Top = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;
export const Left = styled.div`
  width: 50%;
  height: 100%;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;
export const ViewAllLinks = styled.div`
  color: #b7b7b7;
  a {
    color: #1d6490;
    text-decoration: none;
  }
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;
export const Selector = styled.div`
  display: flex;

  button {
    height: 32px;
    padding: 0 8px;
    color: #b7b7b7;
    background-color: transparent;
    border: 1px solid darkgray;
  }
`;
export const All = styled.button`
  border-radius: 5px 0 0 5px;
`;
export const Questions = styled.button``;
export const Answers = styled.button``;
export const Articles = styled.button`
  border-radius: 0 5px 5px 0;
`;
export const Filter = styled.div`
  display: flex;

  button {
    height: 32px;
    padding: 0 8px;
    color: #b7b7b7;
    background-color: transparent;
    border: 1px solid darkgray;
  }
`;
export const Score = styled.button`
  border-radius: 5px 0 0 5px;
`;
export const Newest = styled.button`
  border-radius: 0 5px 5px 0;
`;
export const Bottom = styled.div`
  width: 100%;
  height: 450px;
  background-color: #191a1c;
  border: 1px solid darkgray;
  border-radius: 5px;
  overflow-y: auto;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;
export const LeftItemContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ItemType = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #37855f;
  margin-right: 25px;
`;
export const ReplyNumbers = styled.div`
  width: 50px;
  height: 30px;
  background-color: #37855f;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  margin-right: 25px;
  color: #CDF6E1;
`;
export const ItemLink = styled.div`
display:flex;
align-items:center;
a{
    color: #1d6490;
    text-decoration: none;
}`;
export const RightItemContainer = styled.div`
width: 140px;
display: flex;
align-items:center;
justify-content: flex-end;
`;
export const Date = styled.div`
font-size: 14px;
color: #b7b7b7;
`;
