import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Type of the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input field',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password...',
    value: 'mySecretPassword123',
  },
};

export const Clearable: Story = {
  args: {
    type: 'text',
    label: 'Search',
    placeholder: 'Search...',
    value: 'Some search query',
    clearable: true,
  },
};

export const PasswordWithClear: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password...',
    value: 'anotherSecret',
    clearable: true,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age...',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const DisabledPassword: Story = {
  args: {
    type: 'password',
    label: 'Disabled Password',
    value: 'secretPassword',
    disabled: true,
  },
};

export const EmptyClearable: Story = {
  args: {
    type: 'text',
    label: 'Empty Clearable',
    placeholder: 'Type something to see clear button',
    clearable: true,
  },
};
