import React from 'react';
import { Pill } from '@opengov/component-library/capital';

import ComponentExample from '../ComponentExample';

export const ExamplePill = props => (
  <ComponentExample
    title="Pill"
    code={`<Pill text="Example" onClick=() onRemove=() />`}
  >
    <div>Pill</div>
  </ComponentExample>
);

export const ExamplePillIcon = props => (
  <ComponentExample
    title="Pill.Icon[icon-name]"
    code={`<Pill icon="icon-name" text="Example" onClick=() onRemove=() />`}
  >
    <div>Pill</div>
  </ComponentExample>
);
