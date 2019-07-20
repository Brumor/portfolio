import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContactScreen from '../screens/ContactScreen';

export default class Pages extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <WelcomeScreen/>
        <SkillsScreen/>
        <ProjectsScreen/>
        <ContactScreen/>
      </div>
    );
  }
}
