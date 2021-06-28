import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

import { useSelector, useDispatch } from "react-redux";
import { deleteWordListFB } from "./redux/modules/dictionary";

const Main = (props) => {
  const dispatch = useDispatch();
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
              <ButtonGroup>
                <CreateIcon onClick={() => {}} />
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
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  /* text-align: left; */
  & > dd {
    margin: 0;
  }

  & > dt > p,
  > p {
    width: 28px;
    border-bottom: 1px solid black;
    font-size: 13px;
    font-weight: 600;
  }

  & > dt > dfn,
  & > dd {
    font-size: 18px;
    font-weight: 700;
  }
`;

const ExData = styled.dd`
  color: skyblue;
`;

const ButtonGroup = styled.div`
  color: orange;
  margin: 10px 0 0 70%;
  & > svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;

const addBtnStyle = {
  position: "absolute",
  bottom: "60px",
  right: "10%",
  width: "70px",
  height: "70px",
  border: "none",
  color: "orange",
  webkitFilter: "drop-shadow(2px 0px 1px rgba(50, 50, 93, 0.25))",
  mozFilter: "drop-shadow(2px 0px 1px rgba(50, 50, 93, 0.25))",
  filter: "drop-shadow(2px 0px 1px rgba(50, 50, 93, 0.25))",
};

export default Main;
