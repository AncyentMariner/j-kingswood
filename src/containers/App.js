import React, {Component} from 'react';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
