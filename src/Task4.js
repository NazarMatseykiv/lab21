import React, { useState, useEffect, useRef } from 'react';
class Task4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          { name: 'Микола', surname: 'Шевченко', age: 30 },
          { name: 'Василь', surname: 'Чумак', age: 40 },
          { name: 'Петро', surname: 'Стеценко', age: 50 },
        ],
        showDetails: true, // за умовчанням показуємо деталі про користувачів
      };
    }
  
    toggleDetails = () => {
      this.setState({ showDetails: !this.state.showDetails });
    };
  
    render() {
      const { users, showDetails } = this.state;
      return (
        <div>
          <ul>
            {users.map(user => (
              <li key={user.name}>
                <input type="checkbox" checked={showDetails} onChange={this.toggleDetails} />
                {showDetails ? `${user.name} ${user.surname} ${user.age}` : user.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  export default Task4;
  