import React, { Component } from 'react';
import Summary from './summary.js';
import Cards from './cards.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary />
        <Cards />
      </div>
    );
  }
}

export default App;
