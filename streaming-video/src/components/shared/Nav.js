import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth/Auth';
import './Nav.scss';

const Nav = () => (
  <div className="nav">
    <Link to="/" className="nav__link">
      Streams App
    </Link>
    <Auth />
  </div>
);

export default Nav;
