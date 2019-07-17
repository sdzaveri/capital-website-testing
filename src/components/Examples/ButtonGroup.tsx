import React from 'react';
import { ButtonGroup } from '@opengov/component-library/capital';

import ComponentExample from '../ComponentExample';

export const ExampleButtonGroupNeutral = props => (
  <ComponentExample
    title="ButtonGroup.Neutral"
    code={`<ButtonGroup.Neutral>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.Neutral>`}
    >
    <div>Button Group Neutral</div>
  </ComponentExample>
);

export const ExampleButtonGroupNaked = props => (
  <ComponentExample
    title="ButtonGroup.Naked"
    code={`<ButtonGroup.Naked>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.Naked>`}
  >
    <div>Button Neutral</div>
  </ComponentExample>
);

export const ExampleButtonGroupSmall = props => (
  <ComponentExample
    title="ButtonGroup.XX.Small"
    code={`<ButtonGroup.XX.Small>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.XX.Small>`}
  >
    <div>Button Naked</div>
  </ComponentExample>
);

export const ExampleButtonGroupLarge = props => (
  <ComponentExample
    title="ButtonGroup.XX.Large"
    code={`<ButtonGroup.XX.Large>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.XX.Large>`}
  >
    <div>Button Naked</div>
  </ComponentExample>
);
