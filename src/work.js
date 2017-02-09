import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <h1> PROJECTS </h1>
        <div className="project">
          <a href="https://flixfavs.firebaseapp.com/">
            <div id="project-one"></div>
          </a>

          <div className="project-info">
            <h2>FLIX FAVES</h2>
            <p>Application enables the user to create an account  to save the movies they want to watch. Users can search movies as well as browse upcoming and current movies. When viewing their list, users are alerted when movies they have saved are current or upcoming.</p>
            <p className="build-section">
              <span className="build-heading">Built With: </span>
              <span> Html, Sass, React.JS, Firebase, Movie Database API </span>
            </p>
            <form action="https://flixfavs.firebaseapp.com/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/flixfaves" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>

        <div className="project">
          <a href="https://hilarylewis92.github.io/weather-forecast/">
            <div id="project-two"></div>
          </a>
            <div className="project-info">
            <h2>WEATHER DUX</h2>
            <p>Application enables to search cities for current, hourly, and weekly weather. Three cities can be pinned and deleted for reference.</p>
            <p className="build-section">
              <span className="build-heading">Built With: </span>
              <span> Html, CSS, React.JS, Redux, Geolocation API, Weather Underground API </span>
            </p>
            <form action="https://hilarylewis92.github.io/weather-forecast/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/2DoBox-Pivot" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>

        <div className="project">
          <a href="https://tinify.herokuapp.com/">
            <div id="project-four"></div>
          </a>
            <div className="project-info">
            <h2>TINIFY</h2>
            <p>A URL shortener that creates a shortened link that users can save in folders or share.</p>
            <p className="build-section">
              <span className="build-heading">Built With: </span>
              <span> Html, CSS, React.JS, Node.JS, Express, PosgreSQL</span>
            </p>
            <form action="https://tinify.herokuapp.com/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/Tinyify" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>


        <div className="project">
          <div id="project-three"></div>
          <div className="project-info">
            <h2>SHOOT THE BREEZE </h2>
            <p>Application enables users to send, filter, and search messages</p>
            <p className="build-section">
              <span className="build-heading">Built With: </span>
              <span> Html, Sass, React.JS, Firebase </span>
            </p>
            <form action="https://github.com/ChelseaSkovgaard/2DoBox-Pivot" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = Work;
