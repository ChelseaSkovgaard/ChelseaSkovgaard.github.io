import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <h1 id="about"> ABOUT</h1>
        <div id="bio"> My name is Chelsea Skovgaard. As a front-end web developer, I love to make fun, animated, and user-centered applications and websites.  Experimenting with new technologies and writing clean and reusable code drives my love of web development.
        </div>
        <div className="experience-card one">
          <h2> SKILLS </h2>
          <ul>
            <li> HTML</li>
            <li> CSS </li>
            <li> SASS </li>
            <li>JAVASCRIPT</li>
            <li> REACT </li>
            <li> JQUERY </li>
            <li> MOCHA </li>
            <li> ENZYME </li>
            <li> GIT </li>
            <li> SKETCH </li>
          </ul>
        </div>
        <div className="experience-card">
          <h2> EXPERIENCE </h2>
          <div>
            <h3 className="exp"> Turing School of Software and Design</h3>
            <p>Started a student group to explore design principles, data visualization, and CSS/Sass best practices</p>
            <h3> Program and Communications Coordinator</h3>
            <h3 className="exp"> Community Health Association of Mountain/Plains States 2012-2016</h3>
            <p>Led initiative to address the health needs of underserved populations resulting in over ten training events, new partner collaborations, and development of several new resources</p>
            <p>Managed the expansion of workforce program through developing networking events with partners, utilizing new communication campaigns, and augmenting web presence</p>
          </div>
        </div>
        <div className="experience-card">
          <h2> EDUCATION </h2>
          <article className="edu">
            <h3> Turing School of Software and Design </h3>
            <h4> Front-End Engineering </h4>
            <h4>Intensive seven month program learning UX/UI principles, strong foundations in HTML, CSS, JavaScript, and the tools to build desktop, mobile and web apps</h4>
          </article>
          <article className="edu">
            <h3> University of Colorado, Denver </h3>
            <h4> Masters Public Administration </h4>
          </article>
          <article className="edu">
            <h3> University of Colorado, Boulder </h3>
            <h4> Bachelor of Arts Humanities and English, Minor Political Science, Summa Cum Laude </h4>
          </article>
        </div>
      </div>
    )
  }
}

module.exports = Experience;
