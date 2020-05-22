import React from 'react';
import Resume from '../static/Paul_BRICOUT_resume.pdf';
import styles from './WelcomeScreen.module.css';

console.log(styles);

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <div className='welcome-container' id='welcome'>
        <img
          className='avatar'
          src={require('../static/myAvatar.png')}
          alt='My Avatar'
        />
        <h1 className='title'>
          <span className='title-main'>Fullstack Developer</span>
          <span className='title-sub'>
            Typescript, Javascript, React Native, NodeJS
            <br /> Self-taught and passionate about writing code for humans and
            machines.
          </span>
        </h1>
        <a className={styles.resumeButton} href={Resume} target='_blank'>
          Take a look at my resume
          <span className={styles.annoncement}>
            Currently looking for a Job!
          </span>
        </a>
      </div>
    );
  }
}
