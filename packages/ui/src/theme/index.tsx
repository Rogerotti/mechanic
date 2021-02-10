import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';

import Primary from './primary';
import Secondary from './secondary';
import Primary2 from './primary2';

const themes = { Primary2: Primary2, Primary: Primary, Secondary: Secondary };
const themeNames = Object.keys(themes);

export default ({ children }) => {
  const theme = select('Theme', themeNames, themeNames[0], 'Themes');

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
