import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
      <div className="intro">
        <div id="descriptors">
          <h2> WEB DEVELOPER.</h2>
          <h2> COLLABORATOR.</h2>
          <h2> CREATOR.</h2>
        </div>
        <div id="summary-intro"> My name is Chelsea Skovgaard. As a front-end web developer, I love to make fun, animated, and user-centered applications and websites.  Experimenting with new technologies and writing clean and reusabele code drives my love of web development.
        </div>
       <div className='social-icon'>
        <div id="twitter"></div>
        </div>
        <button id="contact-btn"> Get in Touch </button>
      </div>
    )
  }
}

module.exports = Summary;
