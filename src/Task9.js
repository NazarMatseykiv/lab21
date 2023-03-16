import React, { useState } from 'react';

const employees = [
  { name: 'Іван', surname: 'Петров', salary: 1000 },
  { name: 'Олена', surname: 'Сидоренко', salary: 1500 },
  { name: 'Павло', surname: 'Ковальчук', salary: 1200 },
  { name: 'Наталя', surname: 'Коваленко', salary: 1800 },
];

const Task9 = () => {
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (col) => {
    if (sortBy === col) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(col);
      setSortOrder('asc');
    }
  };

  const sortedEmployees = employees.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (aValue < bValue) {
      return sortOrder === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return sortOrder === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Ім'я</th>
          <th onClick={() => handleSort('surname')}>Прізвище</th>
          <th onClick={() => handleSort('salary')}>Зарплата</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Task9;
