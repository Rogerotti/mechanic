import React, { useState } from 'react';
import Layout from '../../core/layout';
import Searcher from '../../searcher';
import { IHomePageProps } from '../../../interfaces/pages';
import { IBrand } from '../../../interfaces';
import { theme } from '../../../theme';
import { makeStyles, ThemeProvider, CssBaseline, Typography, Box } from '@material-ui/core';
import Header from '../../core/header';

const useStyles = makeStyles({
  test: {
    // backgroundImage: 'url("../../../assets/background.jpg")',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    backgroundColor: '#f6f8fa',
    height: '80vh',
  },
  test1: {
    fontWeight: 'bold',
  },
});

export const HomePage: React.FC<IHomePageProps> = ({ brands, models, cities, onSearchRequest }) => {
  const [currentBrandId, setBrand] = useState<string | null>(null);
  const classes = useStyles();
  const modelsForCurrentBrand = currentBrandId ? models.filter((x) => x.brandId === currentBrandId) : [];

  const onBrandChange = (_: React.ChangeEvent, brand: IBrand | null) => {
    setBrand(brand ? brand.id : null);
  };

  return (
    // <Layout>
    //   <div className={classes.test}>
    //     <Searcher
    //       brands={brands}
    //       models={modelsForCurrentBrand}
    //       cities={cities}
    //       onSearchRequest={() => {
    //         onSearchRequest(currentBrandId, '', '');
    //       }}
    //       onBrandChange={onBrandChange}
    //     />
    //   </div>
    // </Layout>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.test}>
        <Header title="test" />
        <Box marginTop={20} mx={40}>
          <Typography className={classes.test1} color="primary" variant="h2">
            Search
          </Typography>
          <Typography color="primary" variant="h3">
            you best mechanic
          </Typography>
          <Searcher
            brands={brands}
            models={modelsForCurrentBrand}
            cities={cities}
            onSearchRequest={() => {
              onSearchRequest(currentBrandId, '', '');
            }}
            onBrandChange={onBrandChange}
          />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
