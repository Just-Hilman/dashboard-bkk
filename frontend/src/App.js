import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LokerList from "./component/LokerList";
import AddLoker from "./component/AddLoker";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <Switch>
              <Route exact path="/">
                <LokerList />
              </Route>

              <Route path="/add">
                <AddLoker />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
