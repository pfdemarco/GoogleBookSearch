import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav.js";
import Header from "./components/Header";
import { Container } from "@material-ui/core/";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Container>
          <Header />
          <Route exact path="/" component={Books} />
          <Route exact path="/Saved" component={Saved} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
