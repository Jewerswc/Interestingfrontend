import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import FeedPage from './Feedpage';
import Lightbulb from './Lightbulb';
import Accordion from './Accordion';
import Signup from './Signup';
import Leaderboard from './Leaderboard'
import Homepage from './homepage'
import Mode from './Mode'
import Datesort from './Datesort'
import Following from './Following'
import Lightbulboff from './lightbulboff'
const App = () => {
  const [news, setNews] = useState([]);
  // Your useEffect hook to fetch news or other data

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/dashboard" element={<FeedPage />} />
          <Route path="/lightbulb" element={<Lightbulb />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Landingpage" element={<LandingPage />} />
          <Route path="/Mode" element={<Mode />} />
          <Route path="/Datesort" element={<Datesort />} />
          <Route path="/Following" element={<Following />} />
          <Route path="/lightbulboff" element={<Lightbulboff />} />


          {/* Redirect example after login/signup */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/after-login" element={<Navigate to="/dashboard" replace />} /> */}
          {/* Handling 404 - Not Found */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
