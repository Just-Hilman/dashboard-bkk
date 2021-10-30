import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LokerList from "./component/LokerList";
import AddLoker from "./component/AddLoker";
import EditLoker from "./component/EditLoker";

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

              <Route path="/edit/:id">
                <EditLoker />
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
