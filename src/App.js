import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Posts from "./pages/Posts";


  const App = () => {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/course/:cid/all_posts" element={<Posts/>} />

          </Routes>
        </Router>
    );
  };

export default App;
