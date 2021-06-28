import React, { useState } from "react";
import styled from "styled-components";

const Main = (props) => {
  const list = props.list;
  return (
    <>
      <header>
        <h1>My Dictonary</h1>
      </header>
      <dl>
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
              <dd>{l.ex}</dd>
            </WordContainer>
          );
        })}
      </dl>
      <button
        onClick={() => {
          props.history.push("/create");
        }}
      >
        +
      </button>
    </>
  );
};

const WordContainer = styled.div`
  border: 1px solid orange;
  padding: 10px;
  margin-bottom: 20px;
  text-align: left;
  & > dd {
    margin: 0;
  }
`;

export default Main;
