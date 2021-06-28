import React, { useRef } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addWordListFB } from "./redux/modules/dictionary";

const Create = (props) => {
  const wordInput = useRef();
  const meanInput = useRef();
  const exInput = useRef();

  const dispatch = useDispatch();

  return (
    <CreateContainer>
      <Header>
        <h1>단어추가하기</h1>
      </Header>
      <InputContainerFirst>
        <label>
          단어
          <br />
          <input type="text" id="word" ref={wordInput} />
        </label>
      </InputContainerFirst>
      <InputContainer>
        <label>
          설명
          <br />
          <input type="text" id="mean" ref={meanInput} />
        </label>
      </InputContainer>
      <InputContainer>
        <label>
          예시
          <br />
          <input type="text" id="ex" ref={exInput} />
        </label>
      </InputContainer>
      <button
        onClick={() => {
          dispatch(
            addWordListFB({
              word: wordInput.current.value,
              mean: meanInput.current.value,
              ex: exInput.current.value,
            })
          );
          props.history.push("/");
        }}
      >
        추가하기
      </button>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100%;
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

const InputContainerFirst = styled.div`
  padding: 20px;
  border: 1px solid black;
  margin: 70px 0 20px 0;
`;

const InputContainer = styled.div`
  padding: 20px;
  border: 1px solid black;
  margin-bottom: 20px;
`;

export default Create;
