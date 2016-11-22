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
        <div className="summary-intro"> My name is Chelsea Skovgaard.<br/>
        I?m a front-end web developer, <br/>
        who loves to experiment with new technologies,
        collaborate with a wide-range of individuals and groups,<br/>
        and create user-experience focused applications.
        </div>
       <div className='social-icon'>
          <a href="https://twitter.com/ChelseaSkov">
            <span id="twitter"></span>
          </a>
          <div id="github"></div>
          <div id="linkedin"></div>
        </div>
        <button className="action-btn"> Get in Touch </button>
        <button className="action-btn"> Download my Resume </button>
      </div>
    )
  }
}

module.exports = Summary;
