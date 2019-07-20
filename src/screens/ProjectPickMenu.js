import React from 'react';
import ProjectPanel from './ProjectPanel.js';

export default class WelcomeScreen extends React.Component {
  render() {
    const current = this.props.current;
    const info = this.props.info;

    return (
      <div className="project-pick-menu-container">
        {
          info[current].projects.map((value, index) => {
            return <ProjectPanel
              key={index}
              project={value}
              current={current}/>;
          })
        }
      </div>
    );
  }
}
