import React from 'react';

export default class ShowItems extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="menuContainer">
        <p className="menuText">
            <a className="menuItem" onClick={() => this.props.changePage(0)}>Welcome </a>
          - <a className="menuItem" onClick={() => this.props.changePage(1)}>Skills </a>
          - <a className="menuItem" onClick={() => this.props.changePage(2)}>Projects </a>
          - <a className="menuItem" onClick={() => this.props.changePage(3)}>Contact Me </a>
        </p>
      </div>
    );
  }
}
