import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from "./ComponentExample.scss";

const ComponentExample = (props) => {

  return (
  <div className={styles.exampleContainer}>
    <div className={styles.exampleTitle}>{props.title}</div>
    <div className={styles.example}>{props.children}</div>
    <div className={styles.exampleCode}>
      <SyntaxHighlighter language='jsx' style={tomorrow}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  </div>);
};

ComponentExample.propTypes = {
};

ComponentExample.defaultProps = {
};

export default ComponentExample;
