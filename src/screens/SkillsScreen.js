import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SkillsScreen extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="skillsContainer">
        <div className="webContainer">
          <FontAwesomeIcon icon="laptop" className="categoryIcon" size="3x"/>
          <h2>Web</h2>
          <div>
            <div>
              <h3>Frontend</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>ReactJS</p>
              <p>Bootstrap, Material Design</p>
            </div>
            <div>
              <h3>Backend</h3>
              <p>NodeJS</p>
              <p>Flask (Python)</p>
            </div>
          </div>
        </div>
        <div className="mobileContainer">
          <FontAwesomeIcon icon="mobile" className="categoryIcon" size="3x"/>
          <h2>Mobile</h2>
          <FontAwesomeIcon icon={['fab', 'react']} className="logoReactNative" size="2x"/>
          <h3>React Native</h3>
          <FontAwesomeIcon icon={['fab', 'android']} className="logoAndroid" size="3x"/>
          <h3>Android (Java)</h3>
        </div>
        <div className="otherContainer">
          <FontAwesomeIcon icon="code" className="categoryIcon" size="3x"/>
          <h2>Others</h2>
          <div>
            <p>Firebase (Web and Mobile)</p>
            <p>Python</p>
            <p>Git/Github</p>
            <p>Redux</p>
            <p>SQLite (Web and Mobile)</p>
          </div>
        </div>
        <div className="languageRow">
          <div className="languageContainer">
            <h2>Human Languages</h2>
            <div className="languageGrid">
              <div>
                <img className="flag" src="//flags.fmcdn.net/data/flags/h80/fr.png" alt="french_flag"></img>
                <p>French</p>
                <p>Native</p>
              </div>
              <div>
                <img className="flag" src="https://t6.rbxcdn.com/b9b99d5ca62a28211aca170c130a9bbb" alt="english_flag"></img>
                <p>English</p>
                <p>C1</p>
              </div>
              <div>
                <img className="flag" src="https://cdn.countryflags.com/thumbs/sweden/flag-400.png"  alt="Swedish_flag"></img>
                <p>Swedish</p>
                <p>B2</p>
              </div>
              <div>
                <img className="flag" src="//flags.fmcdn.net/data/flags/h80/it.png" alt="italian_flag"></img>
                <p>Italian</p>
                <p>B2</p>
              </div>
              <div>
                <img className="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="german_flag"></img>
                <p>German</p>
                <p>B1</p>
              </div>
              <div>
                <img className="flag" src="//flags.fmcdn.net/data/flags/w580/ru.png" alt="russian_flag"></img>
                <p>Russian</p>
                <p>A2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
