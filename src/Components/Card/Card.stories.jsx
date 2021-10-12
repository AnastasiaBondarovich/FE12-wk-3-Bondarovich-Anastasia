import React from "react"

import Card from "./Card";

export default {
  title: 'Components/Card',
  component: Card,
  actions:{}
}

const Template = args => <Card {...args} />;

export const Finished = Template.bind({});

Finished.args = {
  taskName: "Sample finished card",
  removeTask: () => {},
  isDone: true,
  index:10
}

export const newCard = Template.bind({});

newCard.args = {
  taskName: "Sample finished card",
  removeTask: () => {},
  isDone: false,
  index:10
}