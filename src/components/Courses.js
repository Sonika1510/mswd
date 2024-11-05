import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses'); // Adjust the API endpoint as needed
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title} - {course.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;