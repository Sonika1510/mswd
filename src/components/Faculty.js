import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('/api/faculty'); // Adjust the API endpoint as needed
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <div>
      <h1>Faculty Information</h1>
      <ul>
        {faculty.map((member) => (
          <li key={member.id}>{member.name} - {member.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;