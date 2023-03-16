import React, { useState, useEffect, useRef } from 'react';
class Task6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          { name: 'Микола', age: 30 },
          { name: 'Василь', age: 40 },
          { name: 'Петро', age: 50 },
        ],
        editingIndex: -1,
      };
    }
  
    handleEditClick = (index) => {
      this.setState({ editingIndex: index });
    };
  
    handleEditChange = (e) => {
      const { name, value } = e.target;
      const { users, editingIndex } = this.state;
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = { ...updatedUsers[editingIndex], [name]: value };
      this.setState({ users: updatedUsers });
    };
  
    render() {
      const { users, editingIndex } = this.state;
      return (
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Вік</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={this.handleEditChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="number"
                      name="age"
                      value={user.age}
                      onChange={this.handleEditChange}
                    />
                  ) : (
                    user.age
                  )}
                </td>
                <td>
                  <button onClick={() => this.handleEditClick(index)}>
                    Редагувати
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
  export default Task6;