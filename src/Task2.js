import React, { useState, useEffect, useRef } from 'react';

const employees = [
  { id: 1, firstName: 'John', lastName: 'Doe', salary: 2000 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', salary: 2500 },
  { id: 3, firstName: 'Bob', lastName: 'Smith', salary: 3000 },
];

function Task2() {
  const [checkedIds, setCheckedIds] = useState(employees.map(e => e.id));
  const [totalSalary, setTotalSalary] = useState(0);
  const checkboxRefs = useRef([]);

  useEffect(() => {
    const checkboxes = checkboxRefs.current;
    const checkedEmployees = employees.filter(e => checkboxes[e.id - 1].checked);
    const total = checkedEmployees.reduce((acc, e) => acc + e.salary, 0);
    setTotalSalary(total);
  }, [checkedIds]);

  function handleCheckboxChange(e) {
    const id = parseInt(e.target.value);
    if (e.target.checked) {
      setCheckedIds([...checkedIds, id]);
    } else {
      setCheckedIds(checkedIds.filter(i => i !== id));
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>
                <input
                  type="checkbox"
                  value={employee.id}
                  defaultChecked={checkedIds.includes(employee.id)}
                  ref={el => checkboxRefs.current[employee.id - 1] = el}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total salary: {totalSalary}</p>
    </div>
  );
}

export default Task2;
