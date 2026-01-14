import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastContainer } from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  
 decorators: [
    (Story) => (
      <ToastContainer>
        <Story />
      </ToastContainer>
    ),
  ],
  
  parameters: {
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast message text',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Type of toast notification',
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 1000 },
      description: 'Duration in milliseconds before auto-close',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 3000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  args: {
    message: 'An error occurred. Please try again.',
    type: 'error',
    duration: 5000,
    showCloseButton: true,
  },
};

export const Warning: Story = {
  args: {
    message: 'Your session will expire in 5 minutes.',
    type: 'warning',
    duration: 4000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  args: {
    message: 'New updates are available.',
    type: 'info',
    duration: 3000,
    showCloseButton: true,
  },
};

export const LongMessage: Story = {
  args: {
    message: 'This is a very long notification message to demonstrate how the toast component handles text that spans multiple lines.',
    type: 'info',
    duration: 5000,
    showCloseButton: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    message: 'Auto-close only, no manual close button',
    type: 'info',
    duration: 3000,
    showCloseButton: false,
  },
};

export const ShortDuration: Story = {
  args: {
    message: 'This will disappear quickly!',
    type: 'success',
    duration: 1000,
    showCloseButton: true,
  },
};

export const LongDuration: Story = {
  args: {
    message: 'This will stay for a while...',
    type: 'info',
    duration: 10000,
    showCloseButton: true,
  },
};