import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import search from '../../../public/how-it-works/protege/search.svg';
import rate from '../../../public/how-it-works/protege/thumbUp.svg';

import { HowItWorks } from '.';

export default {
  title: 'Composition/How it works',
  component: HowItWorks,
  decorators: [withKnobs],
};

const Template: Story<ComponentProps<typeof HowItWorks>> = ({ ...args }) => {
  return <HowItWorks {...args} />;
};

export const Basic = Template.bind({});

const stepHeader = 'Przykładowy header';
const stepSubHeader =
  'Zarejestruj się na naszej stronie lub w aplikacji za darmo. Potrzebujesz tylko adresu e-mail albo konta Google lub Facebook.';

Basic.args = {
  header: 'How it works',
  tabs: [
    { id: 'first', value: 'podopieczny', icon: <PermIdentityIcon /> },
    { id: 'second', value: 'trener', icon: <LocalAtmIcon /> },
  ],
  steps: [
    {
      number: 1,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: search,
    },
    {
      number: 2,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
    {
      number: 3,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
    {
      number: 4,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
    {
      number: 5,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
    {
      number: 6,
      header: stepHeader,
      subHeader: stepSubHeader,
      icon: rate,
    },
  ],
};
