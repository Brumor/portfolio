import React from 'react';
import Menu from './Menu';
import Pages from './Pages';
import info from '../info.json';
import "../stylesheets/LightTheme.css";


//Primary : #1976d2 + white
//Light : #63a4ff + Dark
//Dark : #004ba0 + white
//https://fontawesome.com/?from=io

console.log(info[Object.keys(info)[0]].title);

export default class ShowItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page : 0,
      isLight : true,
    }

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  changePage(pageNumber) {

    this.setState({page : pageNumber});

  }

  render() {
    return (
      <div className="mainContainer">
        <div>
          <Menu changePage={this.changePage}/>
          <Pages current={this.state.page} info={info}/>
        </div>
      </div>
    );
  }
}
