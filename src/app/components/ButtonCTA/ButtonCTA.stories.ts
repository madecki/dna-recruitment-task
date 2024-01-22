import type { Meta, StoryObj } from "@storybook/react";
import ButtonCTA from ".";

const meta = {
  title: "Components/ButtonCTA",
  component: ButtonCTA,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CallToAction: Story = {
  args: {
    label: "Buy now!",
  },
};
