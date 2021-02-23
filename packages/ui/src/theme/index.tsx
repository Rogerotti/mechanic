import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';

import Primary from './primary';
import Secondary from './secondary';

const themes = { Primary: Primary, Secondary: Secondary };
const themeNames = Object.keys(themes);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ children }) => {
  const theme = select('Theme', themeNames, themeNames[0], 'Themes');

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
