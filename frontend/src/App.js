import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/style.css";
import MainPage from "./view/MainPage";
import LokerList from "./component/LokerList";
import AddLoker from "./component/AddLoker";
import EditLoker from "./component/EditLoker";
import PesertaList from "./component/PesertaList";
import AddPeserta from "./component/AddPeserta";
import EditPeserta from "./component/EditPeserta";

function App() {
  return (
    <Router>
      <div>
        <div>
          <div>
            <Switch>

              <Route exact path="/">
                <MainPage />
              </Route>

              <Route path="/loker">
                <LokerList />
              </Route>

              <Route path="/addLoker">
                <AddLoker />
              </Route>

              <Route path="/loker/edit/:id">
                <EditLoker />
              </Route>

            </Switch>

            <Switch>
              <Route path="/peserta">
                <PesertaList />
              </Route>

              <Route path="/addPeserta">
                <AddPeserta />
              </Route>

              <Route path="/peserta/edit/:id">
                <EditPeserta />
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
