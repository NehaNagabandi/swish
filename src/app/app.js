import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";


const App = () => {
  
  return (
    <Router>
      <Routes>
      <Route exact path="" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
