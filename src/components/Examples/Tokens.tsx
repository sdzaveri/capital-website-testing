import React from 'react';
import toc from '../Layouts/TOC.scss';
import styles from './Tokens.scss';

export const TokenTOC = props => (
  <ul className={toc.toc}>
    <li><a className={toc.section} href="#colors">Colors</a>
      <a className={toc.subsection} href="#colors-grays">Grays</a>
      <a className={toc.subsection} href="#colors-primary">Primary colors</a>
      <a className={toc.subsection} href="#colors-status">Status colors</a>
      <a className={toc.subsection} href="#colors-viz">Data visualization colors</a>
      <a className={toc.subsection} href="#colors-gradients">Gradients</a>
    </li>
    <li><a className={toc.section} href="#type">Typography</a>
      <a className={toc.subsection} href="#type-fonts">Fonts</a>
      <a className={toc.subsection} href="#type-sizes">Font sizes</a>
      <a className={toc.subsection} href="#type-spacing">Letter spacing</a>
      <a className={toc.subsection} href="#type-heights">Line heights</a>
      <a className={toc.subsection} href="#type-weights">Font weights</a>
      <a className={toc.subsection} href="#type-other">Other</a>
    </li>
    <li><a className={toc.section} href="#layout">Layout</a>
      <a className={toc.subsection} href="#layout-units">Units</a>
      <a className={toc.subsection} href="#layout-z-indexes">Z-indexes</a>
      <a className={toc.subsection} href="#layout-media-queries">Media Queries</a>
    </li>
    <li><a className={toc.section} href="#containers">Containers</a>
      <a className={toc.subsection} href="#containers-borders">Borders</a>
      <a className={toc.subsection} href="#containers-radius">Border radius</a>
      <a className={toc.subsection} href="#containers-shadows">Box Shadows</a>
      <a className={toc.subsection} href="#containers-backgrounds">Backgrounds</a>
    </li>
    <li><a className={toc.section} href="#animation">Animation</a>
      <a className={toc.subsection} href="#animation-transitions">Transitions</a>
    </li>
  </ul>
);

export const TokenExamples = props => (
  <>
    <h2 id="colors">Colors</h2>
    <h3 id="colors-grays">Grays</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-white</td>
        <td className={styles.tokenValue}>rgba(255, 255, 255, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#FFFFFF, Foreground: Component background, the focus of the experience</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-50</td>
        <td className={styles.tokenValue}>rgba(247, 249, 250, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(247, 249, 250, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#F7F9FA, Highlight</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-100</td>
        <td className={styles.tokenValue}>rgba(239, 242, 245, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(239, 242, 245, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#EFF2F5, Ground: Full-screen background</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-200</td>
        <td className={styles.tokenValue}>rgba(223, 227, 232, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(223, 227, 232, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#DFE3E8, Inactive: Hidden tabs, collapsed components</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-300</td>
        <td className={styles.tokenValue}>rgba(206, 210, 214, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(206, 210, 214, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#CED2D6, Extra light borders: Component borders</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-400</td>
        <td className={styles.tokenValue}>rgba(181, 185, 189, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(181, 185, 189, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#B5B9BD, Light borders: Element borders (e.g. tabs, buttons, filters), Text disabled</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-500</td>
        <td className={styles.tokenValue}>rgba(154, 157, 161, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(154, 157, 161, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#9A9DA1</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-700</td>
        <td className={styles.tokenValue}>rgba(97, 99, 101, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(97, 99, 101, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#616365, Text medium: Secondary content</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-gray-1000</td>
        <td className={styles.tokenValue}>rgba(19, 21, 23, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(19, 21, 23, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#131517, Text dark: Primary content</td>
      </tr>
    </table>

    <h3 id="colors-primary">Primary colors</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-primary-brand</td>
        <td className={styles.tokenValue}>rgba(22, 92, 171, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(22, 92, 171, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#165CAB</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-medium</td>
        <td className={styles.tokenValue}>rgba(4, 65, 135, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(4, 65, 135, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#044187</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-dark</td>
        <td className={styles.tokenValue}>rgba(7, 48, 92, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(7, 48, 92, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#07305C</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-selection</td>
        <td className={styles.tokenValue}>rgba(31, 118, 216, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(31, 118, 216, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#1F76D8</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-selection-a70</td>
        <td className={styles.tokenValue}>rgba(31, 118, 216, 0.7)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(31, 118, 216, 0.7)' }}></div></td>
        <td className={styles.tokenNotes}>#1F76D8</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-selection-a50</td>
        <td className={styles.tokenValue}>rgba(31, 118, 216, 0.5)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(31, 118, 216, 0.5)' }}></div></td>
        <td className={styles.tokenNotes}>#1F76D8</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-hover</td>
        <td className={styles.tokenValue}>rgba(194, 229, 255, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(194, 229, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#C2E5FF</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-hover-a50</td>
        <td className={styles.tokenValue}>rgba(194, 229, 255, 0.5)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(194, 229, 255, 0.5)' }}></div></td>
        <td className={styles.tokenNotes}>#C2E5FF</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-hover-light</td>
        <td className={styles.tokenValue}>rgba(224, 242, 255, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(224, 242, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#E0F2FF</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-primary-focus</td>
        <td className={styles.tokenValue}>rgba(0, 149, 255, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(0, 149, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#0095FF</td>
      </tr>
    </table>

    <h3 id="colors-status">Status colors</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-success-400</td>
        <td className={styles.tokenValue}>rgba(86, 186, 154, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(86, 186, 154, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#56BA9A</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-success-500</td>
        <td className={styles.tokenValue}>rgba(47, 168, 130, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(47, 168, 130, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#2FA882</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-success-600</td>
        <td className={styles.tokenValue}>rgba(30, 143, 107, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(30, 143, 107, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#1E8F6B</td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-info-600</td>
        <td className={styles.tokenValue}>rgba(71, 129, 191, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(71, 129, 191, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#4781BF</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-info-700</td>
        <td className={styles.tokenValue}>rgba(46, 98, 153, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(46, 98, 153, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#2E6299</td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-error-50</td>
        <td className={styles.tokenValue}>rgba(255, 236, 232, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(255,236, 232, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#FFECE8</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-error-600</td>
        <td className={styles.tokenValue}>rgba(209, 83, 54, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(209,83, 54, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#D15336</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-error-700</td>
        <td className={styles.tokenValue}>rgba(178, 62, 36, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(178, 62, 36, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#B23E24</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-error-800</td>
        <td className={styles.tokenValue}>rgba(148, 42, 18, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(148, 42, 18, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#942A12</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-error-900</td>
        <td className={styles.tokenValue}>rgba(107, 28, 11, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(107, 28, 11, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#6B1C0B</td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-in-progress-50</td>
        <td className={styles.tokenValue}>rgba(229, 199, 242, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(229, 199, 242, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#E5C7F2</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-in-progress-600</td>
        <td className={styles.tokenValue}>rgba(136, 95, 153, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(136, 95, 153, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#885F99</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-in-progress-700</td>
        <td className={styles.tokenValue}>rgba(107, 71, 122, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(107, 71, 122, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#6B477A</td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-warning-200</td>
        <td className={styles.tokenValue}>rgba(255, 207, 153, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(255, 207, 153, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#FFCF99</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-warning-500</td>
        <td className={styles.tokenValue}>rgba(229, 149, 57, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(229, 149, 57, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#E59539</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-warning-700</td>
        <td className={styles.tokenValue}>rgba(199, 113, 16, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(199, 113, 16, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#C77110</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-warning-800</td>
        <td className={styles.tokenValue}>rgba(176, 98, 9, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(176, 98, 9, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#B06209</td>
      </tr>
    </table>

    <h3 id="colors-viz">Data visualization colors</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$color-viz-1</td>
        <td className={styles.tokenValue}>rgba(71, 129, 191, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(71, 129, 191, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#4781BF</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-2</td>
        <td className={styles.tokenValue}>rgba(161, 187, 229, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(161, 187, 229, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#A1BBE5</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-3</td>
        <td className={styles.tokenValue}>rgba(229, 149, 57, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(229, 149, 57, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#E59539</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-4</td>
        <td className={styles.tokenValue}>rgba(232, 206, 139, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(232, 206, 139, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#E8CE8B</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-5</td>
        <td className={styles.tokenValue}>rgba(111, 93, 168, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(111, 93, 168, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#6F5DA8</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-6</td>
        <td className={styles.tokenValue}>rgba(205, 171, 219, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(205, 171, 219, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#CDABDB</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-7</td>
        <td className={styles.tokenValue}>rgba(61, 153, 144, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(61, 153, 144, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#3D9990</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-8</td>
        <td className={styles.tokenValue}>rgba(124, 207, 180, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(124, 207, 180, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#7CCFB4</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-9</td>
        <td className={styles.tokenValue}>rgba(76, 95, 181, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(76, 95, 181, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#4C5FB5</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-10</td>
        <td className={styles.tokenValue}>rgba(151, 154, 204, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(151, 154, 204, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#979ACC</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-11</td>
        <td className={styles.tokenValue}>rgba(204, 94, 105, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(204, 94, 105, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#CC5E69</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-12</td>
        <td className={styles.tokenValue}>rgba(237, 161, 159, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(237, 161, 159, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#EDA19F</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-13</td>
        <td className={styles.tokenValue}>rgba(70, 146, 176, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(70, 146, 176, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#4692B0</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-14</td>
        <td className={styles.tokenValue}>rgba(139, 212, 214, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(139, 212, 214, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#8BD4D6</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-15</td>
        <td className={styles.tokenValue}>rgba(224, 105, 79, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(224, 105, 79, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#E0694F</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-16</td>
        <td className={styles.tokenValue}>rgba(245, 164, 130, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(245, 164, 130, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#F5A482</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-17</td>
        <td className={styles.tokenValue}>rgba(84, 153, 112, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(84, 153, 112, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#549970</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-18</td>
        <td className={styles.tokenValue}>rgba(154, 217, 164, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(154, 217, 164, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#9AD9A4</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-19</td>
        <td className={styles.tokenValue}>rgba(156, 65, 116, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(156, 65, 116, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#9C4174</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$color-viz-20</td>
        <td className={styles.tokenValue}>rgba(207, 124, 146, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(207, 124, 146, 1)' }}></div></td>
        <td className={styles.tokenNotes}>#CF7C92</td>
      </tr>
    </table>

    <h3 id="colors-gradients">Gradients</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$gradient-success</td>
        <td className={styles.tokenValue}>linear-gradient(-180deg, $color-success-500, $color-success-600)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundImage : 'linear-gradient(-180deg, rgba(47, 168, 130, 1), rgba(30, 143, 107, 1))' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$gradient-warning</td>
        <td className={styles.tokenValue}>linear-gradient(-180deg, $color-warning-500, $color-warning-600)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundImage : 'linear-gradient(-180deg, rgba(229, 149, 57, 1), rgba(176, 98, 9, 1))' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$gradient-error</td>
        <td className={styles.tokenValue}>linear-gradient(-180deg, $color-error-600, $color-error-700)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundImage : 'linear-gradient(-180deg, rgba(209,83, 54, 1), rgba(178, 62, 36, 1))' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$gradient-info</td>
        <td className={styles.tokenValue}>linear-gradient(-180deg, $color-info-600, $color-info-700)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundImage : 'linear-gradient(-180deg, rgba(71, 129, 191, 1), rgba(46, 98, 153, 1))' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$gradient-chrome</td>
        <td className={styles.tokenValue}>linear-gradient(-180deg, $color-gray-50, $color-gray-300)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundImage : 'linear-gradient(-180deg, rgba(247, 249, 250, 1), rgba(206, 210, 214, 1))' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>

    <h2 id="type">Typography</h2>
    <h3 id="type-fonts">Fonts</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$base-font</td>
        <td className={styles.tokenValue}>"Benton Sans", Arial, sans-serif</td>
        <td className={styles.tokenSample}><div>Punter strategic fit take five</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$base-font-condensed</td>
        <td className={styles.tokenValue}>"Benton Sans Condensed", Arial Narrow, sans-serif</td>
        <td className={styles.tokenSample}><div style={{ fontFamily : "'Benton Sans Condensed', Arial Narrow, sans-serif" }}>Deliverables for eow</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h3 id="type-sizes">Font sizes</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$font-size-maximum</td>
        <td className={styles.tokenValue}>3rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '3rem' }}>Herding cats</div></td>
        <td className={styles.tokenNotes}>48px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-size-xxlarge</td>
        <td className={styles.tokenValue}>2.5rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '2.5rem' }}>Drawing board</div></td>
        <td className={styles.tokenNotes}>44px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-size-xlarge</td>
        <td className={styles.tokenValue}>1.75rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '1.75rem' }}>Vertical integration</div></td>
        <td className={styles.tokenNotes}>28px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-size-large</td>
        <td className={styles.tokenValue}>1.25rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '1.25rem' }}>This proposal is a win-win situation</div></td>
        <td className={styles.tokenNotes}>20px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-size-default</td>
        <td className={styles.tokenValue}>1rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '1rem' }}>Can you send me an invite?</div></td>
        <td className={styles.tokenNotes}>16px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-size-small</td>
        <td className={styles.tokenValue}>0.875rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '0.875rem' }}>Streamline productize but accountable</div></td>
        <td className={styles.tokenNotes}>14px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-size-minimum</td>
        <td className={styles.tokenValue}>0.75rem</td>
        <td className={styles.tokenSample}><div style={{ fontSize : '0.75rem' }}>Get six alpha pups in here for a focus group</div></td>
        <td className={styles.tokenNotes}>12px</td>
      </tr>
    </table>
    <h3 id="type-spacing">Letter spacing</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$letter-spacing-default</td>
        <td className={styles.tokenValue}>0.0125em</td>
        <td className={styles.tokenSample}><div style={{ letterSpacing : '0.0125em' }}>Strategic staircase</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$letter-spacing-cap</td>
        <td className={styles.tokenValue}>0.05em</td>
        <td className={styles.tokenSample}><div style={{ letterSpacing : '0.05em' }}>Stellar paradigm shift</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h3 id="type-heights">Line heights</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$line-height-default</td>
        <td className={styles.tokenValue}>1.50</td>
        <td className={styles.tokenSample}><div className={styles.textSample} style={{ lineHeight : '1.50', backgroundSize : '100% 1.5em' }}>Critical mass knowledge process outsourcing yet old boys club mobile friendly get all your ducks in a row.</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$line-height-tight</td>
        <td className={styles.tokenValue}>1.25</td>
        <td className={styles.tokenSample}><div className={styles.textSample} style={{ lineHeight : '1.25', backgroundSize : '100% 1.25em' }}>I'll book a meeting so we can solution this before the sprint is over overcome key issues to meet key milestones.</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$line-height-small-font</td>
        <td className={styles.tokenValue}>1.125rem</td>
        <td className={styles.tokenSample}><div className={styles.textSample} style={{ lineHeight : '1.125rem', backgroundSize : '100% 1.125em' }}>Root-and-branch review can we take this offline quick win, but high touch client.</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h3 id="type-weights">Font weights</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$font-weight-thin</td>
        <td className={styles.tokenValue}>100</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '100' }}>Action item pig in a python</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-extra-light</td>
        <td className={styles.tokenValue}>200</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '200' }}>Low-hanging fruit</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-light</td>
        <td className={styles.tokenValue}>300</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '300' }}>Leverage our synergies</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-book</td>
        <td className={styles.tokenValue}>400</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '400' }}>Cannibalize hard stop</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-regular</td>
        <td className={styles.tokenValue}>500</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '500' }}>Build it so that it scales</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-medium</td>
        <td className={styles.tokenValue}>600</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '600' }}>Draw a line in the sand</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-bold</td>
        <td className={styles.tokenValue}>700</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '700' }}>Bob called an all-hands</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$font-weight-black</td>
        <td className={styles.tokenValue}>800</td>
        <td className={styles.tokenSample}><div style={{ fontWeight : '800' }}>Translating our vision</div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h2 id="layout">Layout</h2>
    <h3 id="layout-units">Units</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$unit-1</td>
        <td className={styles.tokenValue}>8px</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-2</td>
        <td className={styles.tokenValue}>2*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>16px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-3</td>
        <td className={styles.tokenValue}>3*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>24px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-4</td>
        <td className={styles.tokenValue}>4*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>32px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-5</td>
        <td className={styles.tokenValue}>5*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>40px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-6</td>
        <td className={styles.tokenValue}>6*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>48px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-7</td>
        <td className={styles.tokenValue}>7*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>56px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-8</td>
        <td className={styles.tokenValue}>8*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>64px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-9</td>
        <td className={styles.tokenValue}>9*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>72px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-10</td>
        <td className={styles.tokenValue}>10*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>80px</td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$unit-20</td>
        <td className={styles.tokenValue}>20*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>160px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-30</td>
        <td className={styles.tokenValue}>30*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>240px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-40</td>
        <td className={styles.tokenValue}>40*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>320px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-50</td>
        <td className={styles.tokenValue}>50*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>400px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-75</td>
        <td className={styles.tokenValue}>75*$unit-1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>600px</td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$unit-half</td>
        <td className={styles.tokenValue}>$unit-1/2</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>4px</td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$unit-quarter</td>
        <td className={styles.tokenValue}>$unit-1/4</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}>2px</td>
      </tr>
    </table>
    <h3 id="layout-z-indexes">Z-indexes</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$z-index-overlay</td>
        <td className={styles.tokenValue}>1000</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-dialog</td>
        <td className={styles.tokenValue}>900</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-alert</td>
        <td className={styles.tokenValue}>800</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-flash</td>
        <td className={styles.tokenValue}>700</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-main-nav</td>
        <td className={styles.tokenValue}>600</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-form</td>
        <td className={styles.tokenValue}>500</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-panel</td>
        <td className={styles.tokenValue}>400</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-main-panel</td>
        <td className={styles.tokenValue}>400</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-sub-panel</td>
        <td className={styles.tokenValue}>400</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-header</td>
        <td className={styles.tokenValue}>300</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-editable</td>
        <td className={styles.tokenValue}>200</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-content</td>
        <td className={styles.tokenValue}>100</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$z-index-ground</td>
        <td className={styles.tokenValue}>1</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h3 id="layout-media-queries">Media Queries</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$mq-xsmall</td>
        <td className={styles.tokenValue}>screen and (max-width: 464px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-small</td>
        <td className={styles.tokenValue}>screen and (min-width: 465px) and (max-width: 728px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-small-up</td>
        <td className={styles.tokenValue}>screen and (min-width: 465px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-medium</td>
        <td className={styles.tokenValue}>screen and (min-width: 729px) and (max-width: 1076px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-medium-up</td>
        <td className={styles.tokenValue}>screen and (min-width: 729px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-large</td>
        <td className={styles.tokenValue}>screen and (min-width: 1077px) and (max-width: 1436px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-large-up</td>
        <td className={styles.tokenValue}>screen and (min-width: 1077px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-xlarge</td>
        <td className={styles.tokenValue}>screen and (min-width: 1436px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$mq-xlarge-up</td>
        <td className={styles.tokenValue}>screen and (min-width: 1436px)</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h2 id="containers">Containers</h2>
    <h3 id="containers-borders">Borders</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$border-transparent</td>
        <td className={styles.tokenValue}>1px solid transparent</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid transparent' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-gray-100</td>
        <td className={styles.tokenValue}>1px solid $color-gray-100</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(239, 242, 245, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-gray-200</td>
        <td className={styles.tokenValue}>1px solid $color-gray-200</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(223, 227, 232, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-gray-300</td>
        <td className={styles.tokenValue}>1px solid $color-gray-300</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(206, 210, 214, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-gray-400</td>
        <td className={styles.tokenValue}>1px solid $color-gray-400</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(181, 185, 189, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-gray-700</td>
        <td className={styles.tokenValue}>1px solid $color-gray-700</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(97, 99, 101, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$border-primary-dark</td>
        <td className={styles.tokenValue}>1px solid $color-primary-dark</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(7, 48, 92, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-primary-focus</td>
        <td className={styles.tokenValue}>2px solid $color-primary-focus</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '2px solid rgba(0, 149, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$border-error-600</td>
        <td className={styles.tokenValue}>1px solid $color-error-600</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid	rgba(209, 83, 54, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-error-800</td>
        <td className={styles.tokenValue}>1px solid $color-error-800</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(148, 42, 18, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-error-900</td>
        <td className={styles.tokenValue}>1px solid $color-error-900</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(107, 28, 11, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$border-success-500</td>
        <td className={styles.tokenValue}>1px solid $color-success-500</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(47, 168, 130, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$border-warning-500</td>
        <td className={styles.tokenValue}>1px solid $color-warning-500</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(229, 149, 57, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>

    <h3 id="containers-radius">Border radius</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$border-radius-default</td>
        <td className={styles.tokenValue}>3px</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(181, 185, 189, 1)', borderRadius: '3px' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-radius-small</td>
        <td className={styles.tokenValue}>1px</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ border : '1px solid rgba(181, 185, 189, 1)', borderRadius: '1px' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$border-radius-curve</td>
        <td className={styles.tokenValue}>10em 5em</td>
        <td className={styles.tokenSample}><div className={styles.containerSample} style={{ height: '24px', border : '1px solid rgba(181, 185, 189, 1)', borderRadius : '10em 5em' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>

    <h3 id="containers-shadows">Box shadows</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-soft</td>
        <td className={styles.tokenValue}>0 2px 4px 0 rgba(19, 21, 23, 0.30)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 2px 4px 0 rgba(19, 21, 23, 0.30)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-soft-overlay</td>
        <td className={styles.tokenValue}>0 4px 8px 0 rgba(19, 21, 23, 0.60)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 4px 8px 0 rgba(19, 21, 23, 0.60)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-soft-selected</td>
        <td className={styles.tokenValue}>0 1px 3px 0 rgba(7, 48, 92, 0.5)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 1px 3px 0 rgba(7, 48, 92, 0.5)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-hard</td>
        <td className={styles.tokenValue}>0 1px 0 0 rgba(181, 185, 189, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 1px 0 0 rgba(181, 185, 189, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-hard-hover</td>
        <td className={styles.tokenValue}>0 1px 3px 0 rgba(97, 99, 101, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 1px 3px 0 rgba(97, 99, 101, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-hard-focus</td>
        <td className={styles.tokenValue}>0 1px 0 0 rgba(0, 149, 255, 1)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 1px 0 0 rgba(0, 149, 255, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-hard-selected</td>
        <td className={styles.tokenValue}>0 1px 0 0 rgba(7, 48, 92, 0.5)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 1px 0 0 rgba(7, 48, 92, 0.5)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-inset-dark</td>
        <td className={styles.tokenValue}>inset 0 2px 3px 1px rgba(19, 21, 23, 0.60)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : 'inset 0 2px 3px 1px rgba(19, 21, 23, 0.60)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-inset-light</td>
        <td className={styles.tokenValue}>inset 0 2px 3px 1px rgba(19, 21, 23, 0.30)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : 'inset 0 2px 3px 1px rgba(19, 21, 23, 0.30)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-above</td>
        <td className={styles.tokenValue}>0 2px 4px 0 rgba(19, 21, 23, 0.10)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 2px 4px 0 rgba(19, 21, 23, 0.10)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-below</td>
        <td className={styles.tokenValue}>0 -2px 4px 0 rgba(19, 21, 23, 0.10)</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : '0 -2px 4px 0 rgba(19, 21, 23, 0.10)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-primary</td>
        <td className={styles.tokenValue}>inset 0 2em 1.8em -1em $color-primary-selection-a70</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : 'inset 0 2em 1.8em -1em rgba(31, 118, 216, 0.7)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-primary-hover</td>
        <td className={styles.tokenValue}>inset 0 2px 3px 2px transparent</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : 'inset 0 2px 3px 2px transparent' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-neutral</td>
        <td className={styles.tokenValue}>inset 0 2em 1.8em -1em $color-gray-100</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : 'inset 0 2em 1.8em -1em rgba(223, 227, 232, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-neutral-hover</td>
        <td className={styles.tokenValue}>inset 0 -1.5em 1.8em -1em $color-gray-100</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow : 'inset 0 -1.5em 1.8em -1em rgba(223, 227, 232, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-error</td>
        <td className={styles.tokenValue}>inset 0 2em 1.8em -1em $color-error-600</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow: 'inset 0 2em 1.8em -1em rgba(209,83, 54, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-error-hover</td>
        <td className={styles.tokenValue}>inset 0 2px 3px 2px $color-error-700</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow: 'inset 0 2px 3px 2px rgba(178, 62, 36, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$box-shadow-neutral-affix</td>
        <td className={styles.tokenValue}>inset 0 -2em 1.8em -1em $color-gray-50</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow: 'inset 0 -2em 1.8em -1em rgba(247, 249, 250, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$box-shadow-neutral-affix-hover</td>
        <td className={styles.tokenValue}>inset 0 -1.5em 1.8em -1em $color-gray-50</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ boxShadow: 'inset 0 -1.5em 1.8em -1em rgba(247, 249, 250, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h3 id="containers-backgrounds">Backgrounds</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$background-primary</td>
        <td className={styles.tokenValue}>$color-primary-medium</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(4, 65, 135, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$background-neutral</td>
        <td className={styles.tokenValue}>$color-white</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'white' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$background-error</td>
        <td className={styles.tokenValue}>$color-error-700</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(178, 62, 36, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$background-neutral-affix</td>
        <td className={styles.tokenValue}>$color-gray-200</td>
        <td className={styles.tokenSample}><div className={styles.colorSample} style={{ backgroundColor: 'rgba(223, 227, 232, 1)' }}></div></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
    <h2 id="animation">Animation</h2>
    <h3 id="animation-transitions">Transitions</h3>
    <table className={styles.tokens}>
      <tr>
        <td className={styles.tokenName}>$transition-natural</td>
        <td className={styles.tokenValue}>all 300ms ease</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$transition-entrance</td>
        <td className={styles.tokenValue}>all 300ms ease-out</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
      <tr>
        <td className={styles.tokenName}>$transition-exit</td>
        <td className={styles.tokenValue}>all 300ms ease-in</td>
        <td className={styles.tokenSample}></td>
        <td className={styles.tokenNotes}></td>
      </tr>
    </table>
  </>
);
