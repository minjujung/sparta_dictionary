import styled from "styled-components";
import { useState } from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import Create from "./Create";
import Main from "./Main";
import NotFound from "./NotFound";

function App(props) {
  const [list, setList] = useState([
    {
      word: "ㅎ1ㅎ1",
      mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
      ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
    },
    {
      word: "ㅎ1ㅎ1",
      mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
      ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
    },
    {
      word: "ㅎ1ㅎ1",
      mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
      ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
    },
  ]);

  const addWord = (wordCard) => {
    setList([...list, wordCard]);
  };
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Main history={props.history} list={list} />}
          />
          <Route
            path="/create"
            render={(props) => (
              <Create history={props.history} addWord={addWord} />
            )}
          />
          <Route render={(props) => <NotFound history={props.history} />} />
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default withRouter(App);
