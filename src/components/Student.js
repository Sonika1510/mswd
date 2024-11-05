import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/students'); // Adjust the API endpoint as needed
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Information</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - {student.branch}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;