import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Main = (props) => {
  const list = useSelector((state) => state.dictionary.list);
  return (
    <MainContainter>
      <Header>
        <h1>My Dictonary</h1>
      </Header>
      <ListContainer>
        {list.map((l, idx) => {
          return (
            <WordContainer key={idx}>
              <dt>
                <p>단어</p>
                <dfn>{l.word}</dfn>
              </dt>
              <p>설명</p>
              <dd>{l.mean}</dd>
              <p>예시</p>
              <ExData>{l.ex}</ExData>
            </WordContainer>
          );
        })}
      </ListContainer>
      <AddButton
        onClick={() => {
          props.history.push("/create");
        }}
      >
        <span>+</span>
      </AddButton>
    </MainContainter>
  );
};

const MainContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

const Header = styled.header`
  position: fixed;
  top: 40px;
  background-color: white;
  width: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  & > h1 {
    margin: 0;
  }
`;

const ListContainer = styled.dl`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const WordContainer = styled.div`
  width: 80%;
  border: 1px solid orange;
  padding: 10px;
  margin-bottom: 20px;
  text-align: left;
  & > dd {
    margin: 0;
  }
`;

const ExData = styled.dd`
  color: skyblue;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 15%;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  & > span {
    font-size: 40px;
    font-weight: 900;
    color: white;
  }
`;

export default Main;
