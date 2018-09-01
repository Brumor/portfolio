import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Function to get the size of an object
Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};


export default class WelcomeScreen extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const info = this.props.info;
    const currentProject = this.props.currentProject;
    const currentType = this.props.currentType;
    let project;

    //Checks if the project index is not superior to the number of projects
    const projectsNumber = Object.size(info[Object.keys(info)[currentType]].projects);
    if ( projectsNumber < currentProject + 1) {

      project = info[Object.keys(info)[currentType]].projects[projectsNumber - 1];

    } else {

      project = info[Object.keys(info)[currentType]].projects[currentProject];

    }

    let title = project.title;
    let description = project.description;
    let images = project.images;
    let technologies = project.technologies;
    let link = project.link ;

    if (images != null) {
      if (currentType === 1) {
        images = images.map((value) => <img src={value} className="screenshotMobile" alt="screenshot"/>)
      } else {
          images = images.map((value) => <img src={value} className="screenshot" alt="screenshot"/>)
      }
    } else {
      images = <p className="errorMessage" >No screenshot avalaible</p>
    }

    if (technologies != null) {
      technologies = technologies.map((value) => <img src={value} className="pickTitle" alt="technology"/>);
    }

    if (link == null) {
      link = "no code avalaible for this project"
    } else {
      link = <FontAwesomeIcon icon={['fab', 'github-alt']} size="lg"/>
    }



    return (
      <div className="projectPanelContainer">
        <p className="projectTitle">{title}</p>
        <p className="projectDescription">{description}</p>
        {images}
        <div className="madeWith">
          <p>Made with</p>
          {technologies}
        </div>
        <div className="codeDisplay" onClick={() => { window.open(project.link)}}>
          <p>See code here</p>
          {link}
        </div>
      </div>
    );
  }
}
