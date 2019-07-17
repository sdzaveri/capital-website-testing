import React from 'react';
import PropTypes from 'prop-types';

import WebsiteHeader from '../WebsiteHeader';
import LeftNav from '../LeftNav/LeftNav';

import './base.scss';
import styles from './Layout.scss';

const LayoutBase = props => {
  return (
    <div className={styles.bodyWrapper}>
      <WebsiteHeader activeTab={props.activeTab} />
      <LeftNav activeTab={props.activeTab} />
      <main>{props.children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default LayoutBase;
