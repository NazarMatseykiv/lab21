import React, { Component } from 'react';

class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
    };
  }

  handleCheckboxClick(index) {
    const items = [...this.state.items];
    items[index] = items[index].startsWith('✓ ') ? items[index].slice(2) : `✓ ${items[index]}`;
    this.setState({ items });
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.startsWith('✓ ')}
              onChange={() => this.handleCheckboxClick(index)}
            />
            <span style={{ textDecoration: item.startsWith('✓ ') ? 'line-through' : 'none' }}>
              {item.startsWith('✓ ') ? item.slice(2) : item}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Task1;
