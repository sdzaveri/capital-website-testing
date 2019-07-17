import React from 'react';
import PropTypes from 'prop-types';

import LayoutBase from './LayoutBase';
import styles from './Layout.scss';

const LayoutHome = props => (
  <LayoutBase activeTab={props.pageContext.frontmatter.activeTab}>
    <h1 className={styles.homeTitle}>
      {props.pageContext.frontmatter.title}
      <small>{props.pageContext.frontmatter.description}</small>
    </h1>
    <div className={styles.content}>
      <div class={styles.homeGrid}>
        <div class={styles.homeButton}>
          <h2>Components</h2>
          <p>Lorem ipsum blah blah</p>
        </div>
        <div class={styles.homeButton}>
          <h2>Components</h2>
          <p>Lorem ipsum blah blah</p>
        </div>
        <div class={styles.homeButton}>
          <h2>Components</h2>
          <p>Lorem ipsum blah blah</p>
        </div>
        <div class={styles.homeButton}>
          <h2>Components</h2>
          <p>Lorem ipsum blah blah</p>
        </div>
      </div>
      {props.children}
    </div>
  </LayoutBase>
);

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHome;
