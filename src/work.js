import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <h1> PROJECTS </h1>
        <div className="project">
          <div> Image </div>
          <h2> CSS Secrets (In Progress)</h2>
          <p>Webpage </p>
          <p> HTML CSS</p>
          <p> Personal Project </p>
        </div>

        <div className="project">
          <div> Image </div>
          <h2> BETSKETBALL</h2>
          <p>Application that allows you to track bets on basketball games,
          track wins/losses, and view other users bets</p>
          <p> REACT SASS HTML ENYME</p>
          <p> Group Project </p>
        </div>

        <div className="project">
          <div> Image </div>
          <h2>Shoot The Breeze</h2>
          <p>Application that allows users to send messages, filter messages, and search messages</p>
          <p> REACT SASS HTML FIREBASE ENZYME</p>
          <p> Pair Project </p>
        </div>

        <div className="project">
          <h2> ToDoList </h2>
          <div> Image </div>
          <p>Application that allows users to send messages, filter messages, and search messages</p>
          <p> JAVASCRIPT SASS HTML ENZYME</p>
          <p> Pair Project </p>
        </div>
      </div>
    )
  }
}

module.exports = Work;
