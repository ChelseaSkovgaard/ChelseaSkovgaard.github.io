import React, { Component } from 'react';
import Work from './work.js';
import Experience from './experience.js';

class Cards extends Component {
  render() {
    return (
      <div className="cards">
      <Experience />
        <Work />
      </div>
    )
  }
}

module.exports = Cards;
