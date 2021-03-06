// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>My Videos</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or just Browse All</Link>
  </div>
);

export default Landing;
