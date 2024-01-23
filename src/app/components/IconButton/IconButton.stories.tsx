import type { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";
import LikeIcon from "./icons/Like";
import NotificationIcon from "./icons/Notification";
import ShopIcon from "./icons/Shop";
import StarFilled from "./icons/StarFilled";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: ["primary", "secondary", "tertiary"],
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Like: Story = {
  args: {
    variant: "primary",
    children: <NotificationIcon />,
  },
};

export const Notification: Story = {
  args: {
    variant: "secondary",
    children: <LikeIcon />,
  },
};

export const Shop: Story = {
  args: {
    variant: "secondary",
    children: <ShopIcon />,
  },
};

export const Star: Story = {
  args: {
    variant: "secondary",
    children: <StarFilled />,
  },
};
