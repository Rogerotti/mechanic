import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useTranslation from '../../translations/hooks';
import { IBrand, IModel, ICity } from '../../interfaces';

interface SearcherProps {
  brands: IBrand[];
  models: IModel[];
  cities: ICity[];
  onBrandChange: (event: React.ChangeEvent<unknown>, value: IBrand | null) => void;
  onSearchRequest: (event: React.MouseEvent<unknown>) => void;
}

const useStyles = makeStyles({
  root: {
    // width: '75%',
    // margin: 'auto',
    marginTop: 30,
  },
  brandSearcher: {
    // width: 300,
    marginRight: 10,
  },
  modelSearcher: {
    // width: 300,
    marginRight: 10,
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    backgroundColor: '#ee7f79',
    color: 'white',
    width: 150,
  },
  container: {
    padding: 30,
  },
  tabs: {},
});

const Searcher: React.FC<SearcherProps> = ({ brands, models, cities, onBrandChange, onSearchRequest }) => {
  const classes = useStyles();
  const { getText } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <Paper className={classes.root} elevation={3}>
      <Paper color="secondary">
        <Tabs
          className={classes.tabs}
          value={selectedTab}
          onChange={(_, value) => setSelectedTab(value)}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab value={1} icon={<PermIdentityIcon />} label={getText('mechanic')} />
          <Tab value={2} disabled icon={<HomeWorkIcon />} label={getText('workshop')} />
          <Tab value={3} disabled icon={<LocalAtmIcon />} label={getText('pricing')} />
        </Tabs>
      </Paper>

      <Grid className={classes.container} container>
        <Grid item md={3} sm={6}>
          <Autocomplete
            className={classes.modelSearcher}
            options={cities}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label={getText('city')}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="end">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Grid item md={3} sm={6}>
          <Autocomplete
            className={classes.brandSearcher}
            options={brands}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.name}
            onChange={onBrandChange}
            renderInput={(params) => <TextField {...params} label={getText('brand')} variant="outlined" />}
          />
        </Grid>
        <Grid item md={3} sm={6}>
          <Autocomplete
            className={classes.modelSearcher}
            options={models}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.name}
            disabled={models.length < 1}
            renderInput={(params) => <TextField {...params} label={getText('vehicleModel')} variant="outlined" />}
          />
        </Grid>
        <Grid className={classes.buttonContainer} item md={3} sm={6}>
          <Button className={classes.button} variant="contained" onClick={onSearchRequest}>
            {getText('search')}
          </Button>
          {/* <Box display="block">
            <Button variant="contained" color="primary" onClick={onSearchRequest}>
              {getText('search')}
            </Button>
          </Box> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Searcher;
