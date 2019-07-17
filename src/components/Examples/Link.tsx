import React from 'react';
import { Link } from '@opengov/component-library/capital';

import ComponentExample from '../ComponentExample';

export const ExampleLinkStandard = props => (
  <ComponentExample
    title="Link"
    code={`<Link text="Example" href="http://opengov.com" />`}
  >
    <div>Link Standard</div>
  </ComponentExample>
);

export const ExampleLinkQuiet = props => (
  <ComponentExample
    title="Link.Quiet"
    code={`<Link.Quiet text="Example" href="http://opengov.com" />`}
  >
    <div>Link Quiet</div>
  </ComponentExample>
);

export const ExampleLinkProminent = props => (
  <ComponentExample
    title="Link.Prominent"
    code={`<Link.Prominent text="Example" href="http://opengov.com" />`}
  >
    <div>Link Prominent</div>
  </ComponentExample>
);
