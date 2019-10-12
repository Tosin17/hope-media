import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <div className="nav">
    <Link to="/" className="nav__link">
      Streams App
    </Link>
    <button className="nav__auth-button" type="button">
      Log in
    </button>
  </div>
);

export default Nav;
