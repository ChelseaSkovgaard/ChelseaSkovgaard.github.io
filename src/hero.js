import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 id="about"> CHELSEA SKOVGAARD </h1>
        <div id="portrait"></div>
        <div id="bio"> Hi! I'm Chelsea Skovgaard, a front-end software developer.
        After starting my career in the public sector,
        I decided to turn my attention to front-end web development to
        master technologies that can be used for positive and tangible projects.   The challenge, collaboration, and impactful nature of technology drives my
        passion for web development.
        </div>
      </div>
    )
  }
}

module.exports = Hero;
