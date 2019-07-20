import React from 'react';

export default class ShowItems extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <p className="menu-text">
          <a className="menu-item" href="#welcome">Welcome </a>
          - <a className="menu-item" href="#skills">Skills </a>
          - <a className="menu-item" href="#projects">Projects </a>
          - <a className="menu-item" href="#contact">Contact Me </a>
        </p>
      </div>
    );
  }
}
