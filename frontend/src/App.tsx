import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard2 from './pages/Dashbord2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard2 />}></Route>
      </Routes>
    </Router>
  );
};

export default App
