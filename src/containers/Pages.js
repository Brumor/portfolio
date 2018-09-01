import React from 'react';
import WelcomeScreen from "../screens/WelcomeScreen";
import SkillsScreen from "../screens/SkillsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ContactScreen from "../screens/ContactScreen";

export default class Pages extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let current = this.props.current;
    let screen = null;

    switch (current) {
      case 0:
        screen = <WelcomeScreen/>
        break;
      case 1:
        screen = <SkillsScreen/>
        break;
      case 2:
        screen = <ProjectsScreen info={this.props.info}/>
        break;
      case 3:
        screen = <ContactScreen/>
        break;
      default:
        screen = <p>Error no screen attached to number {current}</p>
    }
    return (
      <div className="pageContainer">
          {screen}
      </div>
    );
  }
}
