import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import MechanicCard from './mechanic-card.component';
import januszImage from '../public/mechanic.jpg';

export default {
  title: 'Composition/Mechanic Card',
  component: MechanicCard,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof MechanicCard>> = (args) => <MechanicCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'Jan',
  lastName: 'Nowak',
  location: 'Warszawa 34/6',
  generalBrands: [{ name: 'first', id: '1' }],
  additionalBrands: [{ name: 'second', id: '2' }],
  generalSpecialization: [{ name: 'third', id: '3' }],
  additionalSpecialization: [{ name: 'fourth', id: '4' }],
  bookText: 'Book',
  specializationText: 'Specialization',
  getMoreText: 'More',
  showLessText: 'Less',
  image: januszImage,
};
