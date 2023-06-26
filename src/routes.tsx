import { FunctionComponent } from "preact";
import { Router } from "preact-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const Routes: FunctionComponent = () => (
  <Router>
    <HomePage path="/" />
    <AboutPage path="/about" />
  </Router>
);

export default Routes;
