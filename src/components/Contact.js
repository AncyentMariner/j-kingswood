import React, {Component} from 'react';
import TextBox from './TextBox';
import Twitter from '../images/twitter.png';
import Cat from '../images/Octocat.jpg';
import './contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <TextBox title="contact" />
        <p className="text">I do things in places: here are some of those places</p>
        <div className="links">
          <span className="row">
            <img className="icon" role="presentation" src={Cat} />
            <a href="https://github.com/AncyentMariner" target="_blank" rel="noreferrer noopener">
              github
            </a>
          </span>
          <span className="row">
            <img className="icon" role="presentation" src={Twitter}/>
            <a href="https://twitter.com/ancyentmarinr" target="_blank" rel="noreferrer noopener">
              the twitters
            </a>
          </span>
        </div>
      </div>
    );
  }
}
