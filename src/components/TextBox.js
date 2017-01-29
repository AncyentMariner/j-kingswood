import React, {Component} from 'react';

export default class TextBox extends Component {
  render() {
    return(
      <div className="text-box">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
