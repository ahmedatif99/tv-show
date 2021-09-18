import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/navbar.component";
import Home from "./pages/Home/home.component";
import Details from "./pages/Details/details.component";
import SingleShow from "./pages/Single-Show/single-show.component";

import { Container } from "./App.styles";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/single/:id" component={SingleShow} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
