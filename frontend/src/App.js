import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Todos} from './containers/Todos.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/todos">
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
