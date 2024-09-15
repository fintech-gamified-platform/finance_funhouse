import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LessonComponent from './components/LessonComponent';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lessons" element={<LessonComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
