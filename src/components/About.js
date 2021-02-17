import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const About = () => {
  return (
    <div className="About">
      <h4>Version 1.0.0 </h4>
        <Link to={'/'}>Go Back</Link>
    </div>
  )
}
About.propTypes = {
}

export default About;
