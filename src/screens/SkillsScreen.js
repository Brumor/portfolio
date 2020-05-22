import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SkillsScreen.module.css';

import FR from '../static/france_640.png';
import EN from '../static/united_kingdom_640.png';
import SE from '../static/sweden_640.png';
import IT from '../static/italy_640.png';
import DE from '../static/germany_640.png';
import RU from '../static/russia_640.png';

const LanguageFlag = ({ name, level, imageURL }) => (
  <div>
    <img className={styles.iconFlag} src={imageURL} alt={`${name}_flag`}></img>
    <p className={styles.languageName}>{name}</p>
    <p className={styles.languageLevel}>{level}</p>
  </div>
);

export default class SkillsScreen extends React.Component {
  render() {
    console.log(FR);

    return (
      <div className='skills-container' id='skills'>
        <div className='web-container'>
          <FontAwesomeIcon
            icon='laptop'
            className='icon-skill-category'
            size='3x'
          />
          <p className='category-title'>Web</p>
          <div>
            <div>
              <p className='category-sub'>Frontend</p>
              <ul className='skills-list'>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Gatsby</li>
                <li>Typescript</li>
                <li>CSS and Sass/SCSS</li>
                <li>Bootstrap, Material Design</li>
              </ul>
            </div>
            <div>
              <p className='category-sub'>Backend</p>
              <ul className='skills-list'>
                <li>NodeJS</li>
                <li>Kafka</li>
                <li>GraphQL</li>
                <li>ExpressJS</li>
                <li>Flask (Python)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mobile-container'>
          <FontAwesomeIcon
            icon='mobile'
            className='icon-skill-category'
            size='3x'
          />
          <p className='category-title'>Mobile</p>
          <ul className='skills-list'>
            <FontAwesomeIcon
              icon={['fab', 'react']}
              className='icon-reactnative'
              size='2x'
            />
            <li>React Native</li>
            <FontAwesomeIcon
              icon={['fab', 'android']}
              className='icon-android'
              size='3x'
            />
            <li>Android (Java)</li>
          </ul>
        </div>
        <div className='other-container'>
          <FontAwesomeIcon
            icon='code'
            className='icon-skill-category'
            size='3x'
          />
          <p className='category-title'>Others</p>
          <ul className='skills-list'>
            <li>TensorflowJS</li>
            <li>Firebase (Web and Mobile)</li>
            <li>Python</li>
            <li>Git/Github</li>
            <li>Redux and Context API</li>
            <li>PostgreSQL, MySQL, SQLite</li>
          </ul>
        </div>
        <div className='language-row'>
          <div className='language-container'>
            <p className='category-title'>Human Languages</p>
            <div className={styles.languageGrid}>
              <LanguageFlag name={'French'} level='Native' imageURL={FR} />
              <LanguageFlag name={'English'} level='C1' imageURL={EN} />
              <LanguageFlag name={'Swedish'} level='B2' imageURL={SE} />
              <LanguageFlag name={'Italian'} level='B1' imageURL={IT} />
              <LanguageFlag name={'German'} level='B1' imageURL={DE} />
              <LanguageFlag name={'Russian'} level='A2' imageURL={RU} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
