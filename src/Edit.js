import React, { useRef } from "react";
import styled from "styled-components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import { useSelector, useDispatch } from "react-redux";
import { updateWordListFB } from "./redux/modules/dictionary";

const Edit = (props) => {
  const wordInput = useRef();
  const meanInput = useRef();
  const exInput = useRef();

  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.dictionary.list);
  let word_index = parseInt(props.match.params.index);

  return (
    <CreateContainer>
      <Header>
        <NavigateBeforeIcon
          style={beforeBtn}
          onClick={() => {
            props.history.push("/");
          }}
        />
        <h1>단어수정하기</h1>
      </Header>
      <InputContainer>
        <div>
          <label>
            단어
            <br />
            <input
              type="text"
              id="word"
              ref={wordInput}
              defaultValue={word_list[word_index].word}
            />
          </label>
        </div>
        <div>
          <label>
            설명
            <br />
            <input
              type="text"
              id="mean"
              ref={meanInput}
              defaultValue={word_list[word_index].mean}
            />
          </label>
        </div>
        <div>
          <label>
            예시
            <br />
            <input
              type="text"
              id="ex"
              ref={exInput}
              defaultValue={word_list[word_index].ex}
            />
          </label>
        </div>
      </InputContainer>
      <EditButton
        onClick={() => {
          dispatch(
            updateWordListFB(word_index, {
              word: wordInput.current.value,
              mean: meanInput.current.value,
              ex: exInput.current.value,
            })
          );
          props.history.push("/");
        }}
      >
        수정하기
      </EditButton>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100%;
`;

const Header = styled.header`
  top: 10px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  & > h1 {
    margin: 0;
    font-size: 24px;
  }
`;

const beforeBtn = {
  color: "gray",
  fontSize: "30px",
  marginRight: "30px",
  position: "absolute",
  top: "2px",
  left: "0",
};

const InputContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    padding: 10px;
    border: 2px solid orange;
    background-color: #ffe8c257;
    margin-bottom: 20px;
    width: 90%;
    min-height: 80px;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    & > label {
      border-bottom: 1px solid black;
      font-size: 15px;
      font-weight: 600;
      & > input {
        width: 90%;
        margin-top: 15px;
        padding: 10px;
        font-size: 15px;
        border-radius: 8px;
        border: 0.5px solid grey;
        :focus {
          outline: none;
          border: 1px solid orange;
        }
      }
    }
  }
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 20px;
  padding: 15px 100px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: orange;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export default Edit;
