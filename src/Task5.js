import React, { useState, useEffect, useRef } from 'react';
class Task5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ['Item 1', 'Item 2', 'Item 3']
      };
      this.handleItemClick = this.handleItemClick.bind(this);
      this.handleInputBlur = this.handleInputBlur.bind(this);
    }
  
    handleItemClick(event) {
      const li = event.currentTarget;
      const input = document.createElement('input');
      input.value = li.innerText;
      input.addEventListener('blur', this.handleInputBlur);
      li.innerText = '';
      li.appendChild(input);
      input.focus();
    }
  
    handleInputBlur(event) {
      const input = event.currentTarget;
      const li = input.parentNode;
      li.innerText = input.value;
    }
  
    render() {
      const { items } = this.state;
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={this.handleItemClick}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }
  export default Task5;