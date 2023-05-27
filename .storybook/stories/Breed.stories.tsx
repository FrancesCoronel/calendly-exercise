import React from "react";
import { Breed } from "../../components/Breed";
import { Breed as BreedType } from "../../types";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Breed",
  component: Breed,
} as Meta;

const Template: Story<BreedType> = (args) => <Breed {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Golden Retriever",
  image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_65.jpg",
  lifespan: "10 - 12 years",
  weight: "55 - 75 lbs",
  height: "20 - 24 inches",
  temperament: ["Intelligent", "Kind", "Reliable", "Trustworthy", "Friendly"],
  shedding: 3,
};
