import React from 'react';

import ProjectTypeMenu from './ProjectTypeMenu.js';
import ProjectPickMenu from './ProjectPickMenu.js';
import Resume from '../static/Paul_BRICOUT_resume.pdf';

import info from '../info.json';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'web',
      project: 0,
    };

    this.changeType = this.changeType.bind(this);
    this.changeProject = this.changeProject.bind(this);
  }

  changeType(type) {
    this.setState({ type });
  }

  changeProject(projectNumber) {
    this.setState({ project: projectNumber });
  }

  render() {
    return (
      <div
        id='projects'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.75rem' }}>Projects</h2>
        <p style={{ marginTop: 20, fontSize: '1.4rem' }}>
          This part is still under construction,{' '}
          <a
            style={{ color: '#e91e63', marginTop: 20 }}
            href={Resume}
            target='_blank'
          >
            take a look at my resume instead!
          </a>
        </p>
        <ProjectTypeMenu changeType={this.changeType} info={info} />
        <ProjectPickMenu
          current={this.state.type}
          changeProject={this.changeProject}
          info={info}
        />
      </div>
    );
  }
}
