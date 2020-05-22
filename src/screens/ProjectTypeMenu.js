import React from 'react';
import styles from './ProjectTypeMenu.module.css';

export default class WelcomeScreen extends React.Component {
  render() {
    const info = this.props.info;
    return (
      <div className={styles.projectTypeMenuContainer}>
        <div>
          <a
            className={styles.typeTitle}
            onClick={() => this.props.changeType('web')}
          >
            {info.web.title}
          </a>
          <a
            className={styles.typeTitle}
            onClick={() => this.props.changeType('mobile')}
          >
            {info.mobile.title}
          </a>
          {/*<a
            className='type-title'
            onClick={() => this.props.changeType('others')}
          >
            {info.others.title}
          </a>*/}
        </div>
      </div>
    );
  }
}
