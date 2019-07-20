import React from 'react';
import Pages from './containers/Pages';
import Header from './containers/Header';
import './stylesheets/LightTheme.css';


// Primary : #1976d2 + white
// Light : #63a4ff + Dark
// Dark : #004ba0 + white
// https://fontawesome.com/?from=io

export default class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div>
          <Header/>
          <Pages/>
        </div>
      </div>
    );
  }
}
