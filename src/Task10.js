import React, { useState } from 'react';

const daysOfWeek = {
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  uk: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'],
};

const LanguageSelector = ({ onLanguageChange }) => {
  return (
    <select onChange={(e) => onLanguageChange(e.target.value)}>
      <option value="en">English</option>
      <option value="uk">Українська</option>
    </select>
  );
};

const DaySelector = ({ language }) => {
  const [selectedDay, setSelectedDay] = useState('');

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div>
      <select onChange={handleDayChange}>
        {daysOfWeek[language].map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>
      {selectedDay && <p>You selected {selectedDay}</p>}
    </div>
  );
};

const Task10 = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <DaySelector language={language} />
    </div>
  );
};

export default Task10;
