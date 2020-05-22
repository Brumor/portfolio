import React from 'react';
import ProjectPanel from './ProjectPanel.js';
import styles from './ProjectPanel.module.css';

export default class WelcomeScreen extends React.Component {
  render() {
    const current = this.props.current;
    const info = this.props.info;

    return (
      <div className={styles.projectPickMenuContainer}>
        {info[current].projects.map((value, index) => {
          return <ProjectPanel key={index} project={value} current={current} />;
        })}
      </div>
    );
  }
}
