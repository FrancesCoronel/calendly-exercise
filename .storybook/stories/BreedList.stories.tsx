import React from "react";
import { BreedList } from "../../components/BreedList";
import { Breed as BreedType } from "../../types";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/BreedList",
  component: BreedList,
} as Meta;

const Template: Story<{ breeds: BreedType[] }> = (args) => (
  <BreedList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  breeds: [
    {
      name: "Golden Retriever",
      image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_65.jpg",
      lifespan: "10 - 12 years",
      weight: "55 - 75 lbs",
      height: "20 - 24 inches",
      temperament: [
        "Intelligent",
        "Kind",
        "Reliable",
        "Trustworthy",
        "Friendly",
      ],
      shedding: 3,
    },
    // Add more breeds as needed
  ],
};
