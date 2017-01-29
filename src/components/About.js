import React, {Component} from 'react';
import TextBox from './TextBox';

export default class About extends Component {
  render() {
    return (
      <div>
        <TextBox title="about" />
        this is about me?
      </div>
    );
  }
}
