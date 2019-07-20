import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class SkillsScreen extends React.Component {
  render() {
    return (
      <div className="skills-container" id="skills">
        <div className="web-container">
          <FontAwesomeIcon
            icon="laptop"
            className="icon-skill-category"
            size="3x"/>
          <p className="category-title">Web</p>
          <div>
            <div>
              <p className="category-sub">Frontend</p>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS and Sass/SCSS</li>
                <li>Javascript, JQuery</li>
                <li>ReactJS</li>
                <li>Bootstrap, Material Design</li>
              </ul>
            </div>
            <div>
              <p className="category-sub">Backend</p>
              <ul className="skills-list">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Flask (Python)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-container">
          <FontAwesomeIcon
            icon="mobile"
            className="icon-skill-category"
            size="3x"/>
          <p className="category-title">Mobile</p>
          <ul className="skills-list">
            <FontAwesomeIcon
              icon={['fab', 'react']}
              className="icon-reactnative"
              size="2x"/>
            <li>React Native</li>
            <FontAwesomeIcon
              icon={['fab', 'android']}
              className="icon-android"
              size="3x"/>
            <li>Android (Java)</li>
          </ul>
        </div>
        <div className="other-container">
          <FontAwesomeIcon
            icon="code"
            className="icon-skill-category"
            size="3x"/>
          <p className="category-title">Others</p>
          <ul className="skills-list">
            <li>TensorflowJS</li>
            <li>Firebase (Web and Mobile)</li>
            <li>Python</li>
            <li>Git/Github</li>
            <li>Redux and Context API</li>
            <li>PostgreSQL, MySQL, SQLite</li>
          </ul>
        </div>
        <div className="language-row">
          <div className="language-container">
            <p className="category-title">Human Languages</p>
            <div className="language-grid">
              <div>
                <img
                  className="icon-flag"
                  src="//flags.fmcdn.net/data/flags/h80/fr.png"
                  alt="french_flag"></img>
                <p className="language-name">French</p>
                <p className="language-level">Native</p>
              </div>
              <div>
                <img
                  className="icon-flag"
                  src="https://t6.rbxcdn.com/b9b99d5ca62a28211aca170c130a9bbb"
                  alt="english_flag"></img>
                <p className="language-name">English</p>
                <p className="language-level">C1</p>
              </div>
              <div>
                <img
                  className="icon-flag"
                  src="https://cdn.countryflags.com/thumbs/sweden/flag-400.png"
                  alt="Swedish_flag"></img>
                <p className="language-name">Swedish</p>
                <p className="language-level">B2</p>
              </div>
              <div>
                <img
                  className="icon-flag"
                  src="//flags.fmcdn.net/data/flags/h80/it.png"
                  alt="italian_flag"></img>
                <p className="language-name">Italian</p>
                <p className="language-level">B1</p>
              </div>
              <div>
                <img
                  className="icon-flag"
                  src={`https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png`}
                  alt="german_flag"></img>
                <p className="language-name">German</p>
                <p className="language-level">A2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
