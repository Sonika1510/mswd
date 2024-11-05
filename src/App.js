import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Student from './components/Student';
import Login from './components/Login';
import Register from './components/Register';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
}

export default App;
