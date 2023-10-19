import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { history } from "../helpers/history";
import LandingPage from "./pages/landing-page";


const App = () => {
  return (
    <Router history={history}>
      <Routes>
      <Route exact path="/:template" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
