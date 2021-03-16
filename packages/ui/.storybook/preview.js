import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/styles';
import ThemeProvider from '../src/theme';

export const decorators = [
  (storyFn) => (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />;
      </Helmet>
      <ThemeProvider>
        <CssBaseline />
        <StylesProvider injectFirst>{storyFn()}</StylesProvider>
      </ThemeProvider>
    </>
  ),
];
