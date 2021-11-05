import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/gifs/search" exact>
            <Main />
          </Route>
          <Route path="/gifs/:id/details" exact>
            <Details />
          </Route>
          <Route path="/gifs/favorites" exact>
            <Favorites />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
