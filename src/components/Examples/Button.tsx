import React from 'react';
import { Button } from '@opengov/component-library/capital';
import jsxToString from 'jsx-to-string';

import ComponentExample from '../ComponentExample';

export const ExampleButtonPrimary = props => (
  <ComponentExample
    title="Button.Primary"
    code={`<Button.Primary>Example</Button.Primary>`}
  >
    <div>Button Primary</div>
  </ComponentExample>
);

export const ExampleButtonNeutral = props => (
  <ComponentExample
    title="Button.Neutral"
    code={`<Button.Neutral>Example</Button.Neutral>`}
  >
    <div>Button Neutral</div>
  </ComponentExample>
);

export const ExampleButtonNaked = props => (
  <ComponentExample
    title="Button.Naked"
    code="<Button.Naked>Example</Button.Naked>"
  >
    <div>Button Naked</div>
  </ComponentExample>
);

export const ExampleButtonDestructive = props => (
  <ComponentExample
    title="Button.Destructive"
    code="<Button.Destructive>Example</Button.Destructive>"
  >
    <div>Button Destructive</div>
  </ComponentExample>
);

export const ExampleButtonSmall = props => (
  <ComponentExample
    title="Button.XX.Small"
    code="<Button.XX.Small>Example</Button.XX.Small>"
  >
    <div>Button Small</div>
  </ComponentExample>
);

export const ExampleButtonLarge = props => (
  <ComponentExample
    title="Button.XX.Large"
    code="<Button.XX.Large>Example</Button.XX.Large>"
  >
    <div>Button Large</div>
  </ComponentExample>
);
