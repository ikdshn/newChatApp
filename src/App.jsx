import React from "react";
import Room from "./pages/Room";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./pages/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Room} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;
