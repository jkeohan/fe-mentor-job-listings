import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Tags/Tag',
  component: Tag,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args) => <Tag {...args} />;

export const Basic = Template.bind({});
Basic.args = {name:"CSS"};
