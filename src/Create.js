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
    <>
      <InputContainer>
        <label>
          단어
          <br />
          <input type="text" id="word" ref={wordInput} />
        </label>
      </InputContainer>
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
    </>
  );
};

const InputContainer = styled.div`
  padding: 20px;
  border: 1px solid black;
  margin-bottom: 20px;
`;

export default Create;
