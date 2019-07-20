import React from 'react';

import ProjectTypeMenu from './ProjectTypeMenu.js';
import ProjectPickMenu from './ProjectPickMenu.js';

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
    this.setState({type});
  }

  changeProject(projectNumber) {
    this.setState({project: projectNumber});
  }

  render() {
    return (
      <div id="projects">
        <ProjectTypeMenu changeType={this.changeType} info={info}/>
        <ProjectPickMenu
          current={this.state.type}
          changeProject={this.changeProject}
          info={info}/>
      </div>
    );
  }
}
