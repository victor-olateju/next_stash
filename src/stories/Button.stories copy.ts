import { Button } from "@/storyComponents/Button";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    component: Button
}


export default meta

type Story = StoryObj<StoryProps>;

//to test the primary variant
export const PrimaryStoryButton: Story = {}