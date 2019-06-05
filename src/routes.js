
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './container/home'

const AppRouter = () => (
  <Router >
    <div>
      <Route path={ "/" } exact={ true } component={ Home } />
    </div>
  </Router>
);

export default AppRouter;