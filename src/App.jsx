import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './pages/blogs/Blogs';
import Company from './pages/company/Company';
import Home from './pages/home/Home';
import How from './pages/how/How';
import Terms from './pages/terms/Terms';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/company" element={<Company />}></Route>
        <Route exact path="/how" element={<How />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route exact path="/terms" element={<Terms />}></Route>
      </Routes>
    </Router>
  );
}
