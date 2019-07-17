import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './WebsiteHeader.scss';

const WebsiteHeader = props => (
  <header className={styles.header}>
    <Link to="/" className={styles.siteTitle}>
      <strong>Capital</strong> Design System
    </Link>
    <nav>
      <ul>
        <li className={props.activeTab === 'overview' ? styles.activeTab : null}>
          <Link to="/">Overview</Link>
        </li>
        <li className={props.activeTab === 'design' ? styles.activeTab : null}>
          <Link to="/design">Design</Link>
        </li>
        <li className={props.activeTab === 'components' ? styles.activeTab : null}>
          <Link to="/components">Components & Tokens</Link>
        </li>
      </ul>
    </nav>
  </header>
);

WebsiteHeader.propTypes = {
  siteTitle: PropTypes.string,
  activeTab: PropTypes.oneOf(['overview', 'design', 'components'])
};

WebsiteHeader.defaultProps = {
  siteTitle: ``
};

export default WebsiteHeader;
