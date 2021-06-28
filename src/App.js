import styled from "styled-components";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { loadWordListFB, addWordListFB } from "./redux/modules/dictionary";

import Create from "./Create";
import Main from "./Main";
import NotFound from "./NotFound";
import { useEffect } from "react";
import Edit from "./Edit";

const mapStateTopProps = (state) => ({
  word_list: state.dictionary.list,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadWordListFB());
  },
  add: (new_word) => {
    dispatch(addWordListFB(new_word));
  },
});

function App(props) {
  useEffect(() => {
    props.load();
  }, []);

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
          <Route component={NotFound} />
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

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
