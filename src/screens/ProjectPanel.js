import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Function to get the size of an object
Object.size = function(obj) {
  let size = 0;
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};


export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false,
    };
  }
  render() {
    const project = this.props.project;
    const description = project.description;
    let images = project.images;
    const technologies = project.technologies;
    const link = project.link;
    const current = this.props.current;

    return (
      <div>
        <h3
          className="pick-title"
          onClick={() => this.setState({showPanel: !this.state.showPanel})}>
          {project.title}
        </h3>
        {this.state.showPanel ? (
          <div className="project-panel">
            <p className="project-description">{description}</p>

            {images != null ? images.map((value) => {
              return <img
                src={value}
                className={
                  current === 'mobile' ? 'screenshot-mobile': 'screenshot'
                }
                alt="screenshot"/>;
            }) : images = (
              <p className="error-text" >No screenshot avalaible</p>
            )}

            <div className="made-with">
              <p>Made with</p>
              {
                technologies.map((item) => {
                  return <img
                    src={item}
                    className="pickTitle"
                    alt="technology"/>;
                })
              }
            </div>

            { link !== null ? (
            <div
              className="code-display"
              onClick={() => window.open(project.link)}>
              <p>See code here</p>
              <FontAwesomeIcon icon={['fab', 'github-alt']} size="lg"/>
            </div>
          ) : 'no code avalaible for this project'
            }

          </div>
        ) : null}
      </div>
    );
  }
}
