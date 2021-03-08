import React from 'react';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { CircleWithNumber } from '../circle-with-number';
import { ISchedulerProps } from './scheduler.types';

import { useStyles } from './scheduler.styles';

export const Scheduler: React.FC<ISchedulerProps> = ({}) => {
  const classes = useStyles();
  const arrayOfWeekdays = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

  const dateObj = new Date();
  const weekday = dateObj.toLocaleString('default', { weekday: 'short' });
  const startHour = 6;
  const endHour = 24;
  const numberOfLines = endHour - startHour;
  const linesArray = Array.from(Array(numberOfLines).keys());

  const event = {
    start: new Date(),
    end: new Date(),
    message: 'test',
  };

  return (
    <Box minWidth={600}>
      <Box display="flex" bgcolor="primary.main" textAlign="center" alignItems="center" minHeight={50}>
        {arrayOfWeekdays.map((day) => (
          <Typography className={classes.test} color="secondary" key={day}>
            {day}
          </Typography>
        ))}
      </Box>

      <Box width="100%">
        {linesArray.map((line) => (
          <Box key={line} height={75} borderTop="1px solid grey">
            <Box display="flex" height="100%" width="100%" textAlign="center" alignItems="center">
              {arrayOfWeekdays.map((day) => (
                <Box display="flex" key={day} width="100%" height="90%" justifyContent="center">
                  <Box display="flex" justifyContent="center" bgcolor="primary.main" width="75%" borderRadius={10}>
                    <Typography className={classes.test} color="secondary">
                      8:00-10:00 LOLOLOLOLO
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
