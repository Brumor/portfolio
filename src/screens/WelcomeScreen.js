import React from 'react';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <div className="welcome-container" id="welcome">
        <img
          className="avatar"
          src={require('./myAvatar.png')}
          alt="My Avatar"/>
        <h1 className="title">
          <span className="title-main">
              Fullstack Javascript Developer
          </span>
          <span className="title-sub">
          Self-taught and passionate about writing code for humans and machines.
          </span>
        </h1>
        <p className="annoncement">Currently looking for a Job!</p>
      </div>
    );
  }
}
