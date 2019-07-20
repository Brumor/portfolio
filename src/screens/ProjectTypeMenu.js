import React from 'react';

export default class WelcomeScreen extends React.Component {
  render() {
    const info = this.props.info;
    return (
      <div className="project-type-menu-container">
        <p className="type-title-container" >
          <a
            className="type-title"
            onClick={() => this.props.changeType('web')}>{info.web.title}
          </a>
          <a
            className="type-title"
            onClick={() => this.props.changeType('mobile')}>{info.mobile.title}
          </a>
          <a
            className="type-title"
            onClick={() => this.props.changeType('others')}>{info.others.title}
          </a>
        </p>
      </div>
    );
  }
}
