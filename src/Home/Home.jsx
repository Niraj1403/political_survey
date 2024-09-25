import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-poll">Create Poll and Survey</Link></li>
        <li><Link to="/poll-survey">Poll and Survey</Link></li>
      </ul>
    </div>
  );
};

export default Home;
