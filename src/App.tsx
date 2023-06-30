import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

const App: React.FC = ()=> {
  return (
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
  
  );
}

export default App;
