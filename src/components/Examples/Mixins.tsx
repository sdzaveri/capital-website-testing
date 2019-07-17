import React from 'react';
import toc from '../Layouts/TOC.scss';
import styles from './Tokens.scss';

export const MixinTOC = props => (
  <ul className={toc.toc}>
    <li><a className={toc.section} href="#mixins">Focus</a></li>
  </ul>
);

export const MixinExamples = props => (
  <>
    <h2 id="focus">Focus</h2>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>@focus-default</td>
        <td className={styles.tokenValue}>outline: $border-primary-focus<br />outline-offset: 2px</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ outline : '2px solid rgba(0, 149, 255, 1)', outlineOffset : '2px' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>@focus-tight</td>
        <td className={styles.tokenValue}>border: $border-primary-focus</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '2px solid rgba(0, 149, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
  </>
);
