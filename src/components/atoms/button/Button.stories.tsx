import { ComponentStory } from '@storybook/react';
import { Button, ButtonProps } from 'src/components/atoms/button/Button';

export default {
  component: Button,
  title: 'Button',
};

export const ButtonExample: ComponentStory<typeof Button> = (
  props: ButtonProps
) => <Button {...props}>{'Continue'}</Button>;
