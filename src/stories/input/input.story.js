import { action } from '@storybook/addon-actions';

import Input from './input.svelte';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => ({
  Component: Input,
  props: { inputType: 'text', text: 'Example Input' },
  on: { click: action('clicked') },
});

export const Password = () => ({
  Component: Input,
  props: { inputType: 'password', text: ''},
  on: { click: action('clicked') },
});

