import React, { Component } from 'react';
import Work from './work.js';
import Experience from './experience.js';
import Hero from './hero.js';

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <Hero />
        <Work />
        <Experience />
      </div>
    )
  }
}

module.exports = Cards;
