import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Stats from "./pages/Stats";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
