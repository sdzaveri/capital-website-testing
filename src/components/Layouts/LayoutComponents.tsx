import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import LayoutBase from './LayoutBase';
import styles from './Layout.scss';

const LayoutComponents = props => (
  <LayoutBase activeTab="components">
    <h1>{props.pageContext.frontmatter.title}
      <small>{props.pageContext.frontmatter.description}</small>
    </h1>
    <ul className={styles.tabs} role="tabs">
      <li>
        <Link
          activeClassName={styles.tabsActive}
          to={props.tab === 'code' ? '#' : `components/${props.pageContext.frontmatter.componentFolder}/`}
        >
          Code
        </Link>
      </li>
      <li>
        <Link
          activeClassName={styles.tabsActive}
          to={props.tab === 'usage' ? '#' : `components/${props.pageContext.frontmatter.componentFolder}/usage`}
        >
          Usage
        </Link>
      </li>
    </ul>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutComponents.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutComponents;
