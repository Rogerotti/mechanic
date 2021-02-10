import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from "@material-ui/styles";
import ThemeProvider from '../src/theme';

export const decorators = [(storyFn) => <ThemeProvider>
     <CssBaseline />
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
  </ThemeProvider>];

