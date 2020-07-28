import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Layout from '../../core/layout';

import MechanicCard from '../../cards/mechanicCard';
import januszImage from '../../../assets/janusz.jpg';
import mechanicImage from '../../../assets/mechanic.jpg';

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

const useStyles = makeStyles({
  result: {
    height: 600,
    width: '100%',
    marginTop: 20,
  },
  card: {
    marginTop: 10,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const MechanicsPage: React.FC<unknown> = () => {
  const history = useHistory();
  const generalBrands = [
    { name: 'BMW', id: 'bmw' },
    { name: 'Skoda', id: 'sk' },
  ];
  const additionalBrands = [{ name: 'Alfa Romeo', id: 'ar' }];

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
      location: 'Warszawa ul. Prosta 54/3',
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

  const reservationClick = (id: string) => {
    history.push(`/mechanic/${id}`);
  };

  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.container}>
        {mechanics.map((mechanic) => (
          <MechanicCard
            key={mechanic.id}
            className={classes.card}
            id={mechanic.id}
            name={mechanic.name}
            lastName={mechanic.lastName}
            location={mechanic.location}
            raiting={mechanic.raiting}
            raitingCount={mechanic.raitingCount}
            description={mechanic.description}
            image={mechanic.image}
            onClick={reservationClick}
            generalBrands={generalBrands}
            additionalBrands={additionalBrands}
            generalSpecialization={generalSpecialization}
            additionalSpecialization={additionalSpecialization}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default MechanicsPage;
