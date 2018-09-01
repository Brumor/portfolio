import React from 'react';

// TODO: Add Profile Picture or Logo

export default class WelcomeScreen extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="welcomeContainer">
          <img className="avatar" src={require("./myAvatar.png")} alt="My Avatar"/>
          <h1 className="title">Android, React Native and ReactJS Developer</h1>
          <h2 className="annoncement">Currently looking for an internship !</h2>
          <h3 className="description">Self-taught and passionate about my work.

          Feel free to take a look at my latest projects on the web Project page.</h3>

          <h3 className="description">Based in Lyon, France, but willing to work abroad.</h3>

          <h3 className="description">Enquires at paulbricout2@gmail.com</h3>
      </div>
    );
  }
}
