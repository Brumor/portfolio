import React from 'react';

import ProjectTypeMenu from "./ProjectTypeMenu.js";
import ProjectPickMenu from "./ProjectPickMenu.js";
import ProjectPanel from "./ProjectPanel.js";


export default class WelcomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: 0,
      project : 0
    }

    this.changeType = this.changeType.bind(this);
    this.changeProject = this.changeProject.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  changeType(typeNumber) {

    this.setState({type : typeNumber});

  }

  changeProject(projectNumber) {

    this.setState({project : projectNumber});

  }

  render() {
    return (
      <div className="projectContainer">
        <ProjectTypeMenu changeType={this.changeType} info={this.props.info}/>
        <ProjectPickMenu current={this.state.type} changeProject={this.changeProject} info={this.props.info}/>
        <ProjectPanel currentType={this.state.type} currentProject={this.state.project} info={this.props.info}/>
      </div>
    );
  }
}
