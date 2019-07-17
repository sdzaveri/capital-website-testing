import React from 'react';
import PropTypes from 'prop-types';

import LayoutBase from './LayoutBase';
import styles from './Layout.scss';

const LayoutSection = props => (
  <LayoutBase activeTab={props.pageContext.frontmatter.activeTab}>
    <h1 className={styles.sectionTitle}>{props.pageContext.frontmatter.title}</h1>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutSection;
