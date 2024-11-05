import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timetable = () => {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await axios.get('/api/timetable'); // Adjust the API endpoint as needed
        setTimetable(response.data);
      } catch (error) {
        console.error('Error fetching timetable data:', error);
      }
    };

    fetchTimetable();
  }, []);

  return (
    <div>
      <h1>Your Timetable</h1>
      <ul>
        {timetable.map((entry) => (
          <li key={entry.id}>{entry.course} - {entry.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default Timetable;