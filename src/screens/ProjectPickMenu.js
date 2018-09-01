import React from 'react';

export default class WelcomeScreen extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let current = this.props.current;
    let title = null;
    let listProjects = null;
    let listFormattedProjects = null;
    const info = this.props.info;

    switch (current) {
      case 0:
        title = info.web.title;
        listProjects = info.web.projects;
        listFormattedProjects = listProjects.map((value, index) => <h3 className="pickTitle" onClick={() => this.props.changeProject(index)}>{value.title}</h3>);
        break;
      case 1:
        title = info.mobile.title;
        listProjects = info.mobile.projects;
        listFormattedProjects = listProjects.map((value, index) => <h3 className="pickTitle" onClick={() => this.props.changeProject(index)}>{value.title}</h3>);
        break;
      case 2:
        title = info.others.title;
        listProjects = info.others.projects;
        listFormattedProjects = listProjects.map((value, index) => <h3 className="pickTitle" onClick={() => this.props.changeProject(index)}>{value.title}</h3>);
        break;
      default:
        title = <p>Error no screen attached to number {current}</p>
    }

    return (
      <div className="projectPickMenuContainer">
        <h2 className="pickTitle">{title}</h2>
        {listFormattedProjects}
      </div>
    );
  }
}
