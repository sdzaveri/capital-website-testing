import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './LeftNav.scss';
import navigation from '../../data/navigation.json';

const renderNavItems = section => {
  return section.links.map(item => {
    return (
      <li key={item.url}>
        <Link partiallyActive={true} activeClassName={styles.activePage} to={item.url}>
          {item.title}
        </Link>
      </li>
    );
  });
};

const LeftNav = ({ activeTab }) => {
  let navigationMenuJSX = [];
  navigation[activeTab].map(section => {
    navigationMenuJSX.push(
      <li key={section.title} className={styles.section}>
        {section.title}
      </li>
    );
    navigationMenuJSX.push(renderNavItems(section));
  });

  return (
    <nav aria-label="Side navigation" className={styles.secondaryNav}>
      <ul>{navigationMenuJSX}</ul>
    </nav>
  );
};

LeftNav.propTypes = {
  activeTab: PropTypes.string
};

LeftNav.defaultProps = {};

export default LeftNav;
