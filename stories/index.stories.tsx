import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../packages/Button';

storiesOf('Button', module)
  .add('with text', () => <Button text='sup' />);
