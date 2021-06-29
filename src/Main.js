import React, { useEffect } from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import { useSelector, useDispatch } from "react-redux";
import { deleteWordListFB, loadMoreFB } from "./redux/modules/dictionary";

const Main = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.dictionary.list);

  return (
    <MainContainter>
      <Header>
        <div>
          <h1>My Dictonary</h1>
          <MenuBookIcon style={bookIconStyle} />
        </div>
        <h2>-나만의 사전-</h2>
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
              <ButtonGroup>
                <CreateIcon
                  onClick={() => {
                    props.history.push("/edit/" + idx);
                  }}
                />
                <DeleteIcon
                  onClick={() => {
                    dispatch(deleteWordListFB(idx));
                  }}
                />
              </ButtonGroup>
            </WordContainer>
          );
        })}
      </ListContainer>
      <AddCircleIcon
        style={addBtnStyle}
        onClick={() => {
          props.history.push("/create");
        }}
      />
      <button
        onClick={() => {
          dispatch(loadMoreFB(list[list.length - 1].word));
        }}
      >
        load more
      </button>
    </MainContainter>
  );
};

const MainContainter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

const Header = styled.header`
  position: absolute;
  top: 10px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    height: 40px;
    display: flex;
    align-items: center;
  }
  & > div > h1 {
    margin: 0 20px 0 0;
  }

  & > h2 {
    margin: 0;
    font-size: 15px;
  }
`;

const bookIconStyle = {
  color: "skyblue",
  fontSize: "40px",
};

const ListContainer = styled.dl`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #8080808c;
  }
`;

const WordContainer = styled.div`
  width: 80%;
  border: 1px solid orange;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
  background-color: #ffe8c257;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  & > dd {
    margin: 0;
  }

  & > dt > p,
  > p {
    width: 20px;
    border-bottom: 1px solid black;
    font-size: 11px;
    font-weight: 600;
  }

  & > dt > dfn,
  & > dd {
    font-size: 15px;
    font-weight: 700;
  }
`;

const ExData = styled.dd`
  color: skyblue;
`;

const ButtonGroup = styled.div`
  position: absolute;
  color: orange;
  margin-top: 10px;
  top: 5px;
  right: 5px;
  & > svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;

const addBtnStyle = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  fontSize: "50px",
  border: "none",
  color: "orange",
  WebkitFilter: "drop-shadow(2px 0px 1px rgba(50, 50, 93, 0.25))",
  MozFilter: "drop-shadow(2px 0px 1px rgba(50, 50, 93, 0.25))",
  filter: "drop-shadow(2px 0px 1px rgba(50, 50, 93, 0.25))",
};

export default Main;
