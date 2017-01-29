import React, {Component} from 'react';
import TextBox from './TextBox';

export default class Home extends Component {

  // function lines() {
  //   var lengths = [];
  //
  //   for (var i = 0; i < numberOfSides; i++) {
  //     lengths.push(mustaches[i].getTotalLength());
  //     mustaches[i].style.strokeDasharray = lengths[i];
  //     mustaches[i].style.strokeDashoffset = lengths[i];
  //   }
  // }
  //
  // lines();

  render() {
    return (
      <div>
        <TextBox title="jeff kingswood" />
        <p>home?</p>
      </div>
    );
  }
}
