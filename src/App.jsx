import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CreatePoll from "./CreatePoll/CreatePoll";
import PollSurvey from "./PollSurvey/PollSurvey";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/poll-survey" element={<PollSurvey />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;