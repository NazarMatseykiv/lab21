import React, { useState, useEffect, useRef } from 'react';
class Task7 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        routes: [
          { name: 'Карпати', duration: '7 днів' },
          { name: 'Крим', duration: '10 днів' },
          { name: 'Карпати+Крим', duration: '14 днів' },
        ],
        selectedRoute: null
      };
    }
    
    handleRouteSelection(route) {
      this.setState({ selectedRoute: route });
    }
  
    render() {
      const { routes, selectedRoute } = this.state;
      return (
        <div>
          <h3>Маршрути:</h3>
          {routes.map((route, index) => (
            <div key={index}>
              <input
                type="radio"
                id={route.name}
                name="route"
                value={route.name}
                checked={selectedRoute === route}
                onChange={() => this.handleRouteSelection(route)}
              />
              <label htmlFor={route.name}>{route.name} ({route.duration})</label>
            </div>
          ))}
          <p>Вибраний маршрут: {selectedRoute ? `${selectedRoute.name} (${selectedRoute.duration})` : 'не обрано'}</p>
        </div>
      );
    }
  }
  export default Task7;
  