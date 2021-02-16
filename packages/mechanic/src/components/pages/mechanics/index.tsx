import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Layout from '../../core/layout';
import { theme } from '../../../theme';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import MechanicCard from '../../../../../ui/src/composition/mechanic-card';
import januszImage from '../../../public/janusz.jpg';
import mechanicImage from '../../../public/mechanic.jpg';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  TextField,
  InputAdornment,
  CssBaseline,
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useTranslation from '../../../translations/hooks';

interface IMechanic {
  id: string;
  name: string;
  lastName: string;
  location: string;
  raiting: number;
  raitingCount: number;
  description: string;
  image: string;
}

const useStyles = makeStyles((theme) => ({
  ttt: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#DBDBDF',
  },
  ttt2: {
    backgroundColor: '#f6f8fa',
  },
  result: {
    height: 600,
    width: '100%',
    marginTop: 20,
  },
  card: {
    marginTop: 10,
  },
  container: {
    backgroundColor: '#f6f8fa',
    display: 'flex',
    padding: 16,
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  right: {
    display: 'flex',
    width: 600,
  },
  gridContainer: {
    width: '50%',
    margin: 'auto',
  },
  gridItem: {
    margin: theme.spacing(0, 3),
  },
}));

const MechanicsPage: React.FC<unknown> = () => {
  const history = useHistory();
  const { getText } = useTranslation();
  const generalBrands = [
    { name: 'BMW', id: 'bmw' },
    { name: 'Skoda', id: 'sk' },
  ];
  const additionalBrands = [
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
    { name: 'Alfa Romeo', id: 'ar' },
  ];

  const generalSpecialization = [
    { name: 'Silnik', id: 'sil' },
    { name: 'Zawieszenie', id: 'zaw' },
  ];
  const additionalSpecialization = [{ name: 'Wymiana oleju', id: 'wo' }];

  const mechanics: IMechanic[] = [
    {
      id: 'Jan',
      image: januszImage,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Janusz',
      lastName: 'Zabijaka',
      location: 'Na Zakolu Wisły 14,  Podgórze,  Kraków',
      raiting: 4.5,
      raitingCount: 150,
    },
    {
      id: 'Rob',
      image: mechanicImage,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Robert',
      lastName: 'Haubica',
      location: 'Kraków ul. Ślepa 11',
      raiting: 5,
      raitingCount: 34,
    },
  ];

  const cities = [
    { id: 'wa', name: 'Warszawa' },
    { id: 'kr', name: 'Kraków' },
    { id: 'lo', name: 'Łódź' },
    { id: 'wr', name: 'Wrocław' },
    { id: 'po', name: 'Poznań' },
    { id: 'gd', name: 'Gdańsk' },
    { id: 'sz', name: 'Szczecin' },
    { id: 'by', name: 'Bydgoszcz' },
    { id: 'lu', name: 'Lublin' },
    { id: 'bi', name: 'Białystok' },
  ];

  const reservationClick = (id: string) => {
    history.push(`/mechanic/${id}`);
  };

  const handleChange = () => {};
  const onSearchRequest = () => {};

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.ttt2}>
        <Box className={classes.ttt} padding={10}>
          <Grid className={classes.gridContainer} container>
            <Grid item md={4} sm={6}>
              <Autocomplete
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
            <Grid item md={4} sm={6}>
              <Autocomplete
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
            <Grid item md={4} sm={6}>
              <Button color="primary" variant="contained" onClick={onSearchRequest}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.container}>
        <div className={classes.right}>
          <FormControl component="fieldset">
            <FormLabel>Brand</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
              <FormControlLabel value="BMW" control={<Radio color="primary" />} label="BMW" />
              <FormControlLabel value="Renault" control={<Radio color="primary" />} label="Renault" />
              <FormControlLabel value="Skoda" control={<Radio color="primary" />} label="Skoda" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.center}>
          {mechanics.map((mechanic) => (
            <div />
          ))}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default MechanicsPage;
// <MechanicCard
//   key={mechanic.id}
//   className={classes.card}
//   id={mechanic.id}
//   name={mechanic.name}
//   lastName={mechanic.lastName}
//   location={mechanic.location}
//   raiting={mechanic.raiting}
//   raitingCount={mechanic.raitingCount}
//   description={mechanic.description}
//   image={mechanic.image}
//   onClick={reservationClick}
//   generalBrands={generalBrands}
//   additionalBrands={additionalBrands}
//   generalSpecialization={generalSpecialization}
//   additionalSpecialization={additionalSpecialization}
// />
