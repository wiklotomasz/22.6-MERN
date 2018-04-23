import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import styles from './Navigation.css';

export function Navigation (props, context) {
  return (
      <div>
        <ul>
          <li><Link to="/home">
            <Home />
          </Link></li>
          <li><Link to="/post">
            <Post />
          </Link><</li>
          <li><Link to="/about">
            <About />
          </Link><</li>
        </ul>
      </div>
  );
}

Navigation.contextTypes = {
  router: React.PropTypes.object,
};

Navigation.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default Navigation;