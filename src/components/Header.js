import React, {Component} from 'react';
import {Link} from 'react-router';
import './header.css';
import logo from '../images/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <Link className="logo-box" to="/">
          <img id="logo" alt="logo" src={logo} />
        </Link>

        <div className="nav-buttons">
          <Link className="button" to="/about">
            / about /
          </Link>
          <Link className="button" to="/work">
            / work /
          </Link>
          <Link className="button" to="/contact">
            / let's talk /
          </Link>
        </div>
      </header>
    );
  }
}
