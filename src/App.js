import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import Create from "./Create";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
