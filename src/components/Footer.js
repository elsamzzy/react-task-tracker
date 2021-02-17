import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>Copyright &copy; 2021</p>
      <Link to={'/about'}>About</Link>
    </footer>
  )
}
Footer.propTypes = {
}

export default Footer;
