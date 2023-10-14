import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for the date picker

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState(null); // Initialize with null
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (birthDate) {
      const birthYear = birthDate.getFullYear();
      const currentYear = new Date().getFullYear();
      setAge(currentYear - birthYear);
    }
  };

  return (
    <div>
      <DatePicker
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
        placeholderText="Select your birthdate"
        dateFormat="yyyy-MM-dd"
      />
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          marginTop: '10px',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age && <p>Your age is {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;


