import './App.css';

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import Leaf from './components/Leaf'

function App() {

  const LeafWithRouter = withRouter(Leaf);

  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<LeafWithRouter />} />
      </Switch>
    </Router>
  );
}

export default App;
