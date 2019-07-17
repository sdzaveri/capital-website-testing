import React from 'react';
import { ButtonGroup, ButtonToggle } from '@opengov/component-library/capital';

import ComponentExample from '../ComponentExample';

export const ExampleButtonToggleNeutral = props => (
  <ComponentExample
    title="ButtonToggle.Neutral"
    code={`<ButtonToggle.Neutral>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.Neutral>`}
    >
    <div>Button Group Neutral</div>
  </ComponentExample>
);

export const ExampleButtonToggleNaked = props => (
  <ComponentExample
    title="ButtonToggle.Naked"
    code={`<ButtonToggle.Naked>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.Naked>`}
  >
    <div>Button Neutral</div>
  </ComponentExample>
);

export const ExampleButtonToggleSmall = props => (
  <ComponentExample
    title="ButtonToggle.XX.Small"
    code={`<ButtonToggle.XX.Small>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.XX.Small>`}
  >
    <div>Button Naked</div>
  </ComponentExample>
);

export const ExampleButtonToggleLarge = props => (
  <ComponentExample
    title="ButtonToggle.XX.Large"
    code={`<ButtonToggle.XX.Large>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.XX.Large>`}
  >
    <div>Button Naked</div>
  </ComponentExample>
);
