import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: ["primary", "secondary", "tertiary"],
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Tertiary",
  },
};

export const Regular: Story = {
  args: {
    size: "regular",
    label: "Regular",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large",
  },
};
