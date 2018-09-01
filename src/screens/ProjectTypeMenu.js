import React from 'react';

export default class WelcomeScreen extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const info = this.props.info;
    return (
      <div className="projectTypeMenuContainer">
        <h2 className="typeTitle" >Type</h2>
        <h3 className="typeTitle"  onClick={() => this.props.changeType(0)}>{info.web.title}</h3>
        <h3 className="typeTitle" onClick={() => this.props.changeType(1)}>{info.mobile.title}</h3>
        <h3 className="typeTitle" onClick={() => this.props.changeType(2)}>{info.others.title}</h3>
      </div>
    );
  }
}
