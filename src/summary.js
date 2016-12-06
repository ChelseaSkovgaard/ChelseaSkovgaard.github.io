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
        <div className="interact-buttons">
         <div className='social-icon'>
            <a href="https://twitter.com/ChelseaSkov">
              <span id="twitter"></span>
            </a>
            <a href="https://github.com/ChelseaSkovgaard">
              <span id="github"></span>
            </a>
            <a href="https://www.linkedin.com/in/chelseaskovgaard">
              <span id="linkedin"></span>
            </a>
          </div>
          <form action="mailto:chelseaskovgaard@gmail/com" method="get">
            <button className="action-btn"> Get in Touch </button>
          </form>
          <form action="mailto:chelseaskovgaard@gmail/com" method="get">
            <button className="action-btn"> Request Resume </button>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = Summary;
