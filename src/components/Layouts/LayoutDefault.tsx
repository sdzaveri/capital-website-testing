import React from 'react';
import PropTypes from 'prop-types';

import LayoutBase from './LayoutBase';

import styles from './Layout.scss';

const LayoutDefault = props => (
  <LayoutBase activeTab={props.pageContext.frontmatter.activeTab}>
    <h1>{props.pageContext.frontmatter.title}
      <small>{props.pageContext.frontmatter.description}</small>
    </h1>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutDefault;
