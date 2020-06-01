import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                  </ul>
              </nav>
              <Switch>
                  <Route path="/">
                      <Homepage />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
