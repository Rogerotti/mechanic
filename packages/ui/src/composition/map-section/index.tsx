import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { Map } from '@core-components/map';
import { useStyles } from './map-section.styles';
import { IMapSectionsProps } from './map-section.types';

export const MapSection: React.FC<IMapSectionsProps> = ({ position, zoom, street, distance }) => {
  const classes = useStyles();

  return (
    <Box mt={2} p={1} bgcolor="primary.main" borderRadius={10} border="1px solid" borderColor="white">
      <Box p={2}>
        <Typography
          style={{
            fontSize: 22,
          }}
        >
          {street}
        </Typography>
        <Typography
          style={{
            fontSize: 12,
            textAlign: 'center',
          }}
        >
          {distance}
        </Typography>
      </Box>

      <Box height="300px" borderRadius={10}>
        <Map className={classes.map} position={position} zoom={zoom} />
      </Box>
    </Box>
  );
};
