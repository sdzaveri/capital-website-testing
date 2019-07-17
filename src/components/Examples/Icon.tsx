import React from 'react';
import { Icon } from '@opengov/component-library/capital';

import ComponentExample from '../ComponentExample';

export const ExampleIcon = props => (
  <ComponentExample
    title="Icon[icon-name](label=Label)"
    code={`<Icon icon="icon-name" ariaLabel="Label" />`}
  >
    <div>Icon</div>
  </ComponentExample>
);

export const ExampleIconHidden = props => (
  <ComponentExample
    title="Icon[icon-name](hidden)"
    code={`<Icon icon="icon-name" ariaHidden={true} />`}
  >
    <div>Icon</div>
  </ComponentExample>
);

export const ExampleIconLabelledBy = props => (
  <ComponentExample
    title="Icon[icon-name](labelledby=tooltip)"
    code={`<Icon icon="icon-name" ariaLabelledby="tooltipID" />`}
  >
    <div>Icon</div>
  </ComponentExample>
);
