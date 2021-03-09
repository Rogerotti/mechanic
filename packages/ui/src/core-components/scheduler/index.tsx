import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CircleWithNumber } from '../circle-with-number';
import { ISchedulerProps } from './scheduler.types';

import { useStyles } from './scheduler.styles';
import { getClosestMonday } from './scheduler.utils';

export const Scheduler: React.FC<ISchedulerProps> = ({ startHour, endHour, weeksFromCurrentDay = 0 }) => {
  if (startHour < 1 || endHour < 2) return null;
  if (startHour >= endHour) return null;
  if (startHour > 23 || endHour > 24) return null;

  const [currentMondayDate, setCurrentMondayDate] = useState(getClosestMonday(new Date()));

  const onPreviousWeekClick = () => {
    const newDate = new Date(currentMondayDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentMondayDate(newDate);
  };

  const onNextWeekClick = () => {
    const newDate = new Date(currentMondayDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentMondayDate(newDate);
  };

  const classes = useStyles();
  const arrayOfWeekdays = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];
  // const data2 = getClosestMonday(new Date(2021, 2, 17));
  console.log(currentMondayDate);

  const numberOfLines = endHour + 1 - startHour;
  const linesArray = Array.from(Array(numberOfLines).keys());

  const event = {
    start: new Date(),
    end: new Date(),
    message: 'test',
  };

  return (
    <Box minWidth={600}>
      <Box
        className={classes.header}
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        bgcolor="secondary.main"
        textAlign="center"
        pt={1}
      >
        <ChevronLeftIcon className={classes.cursor} onClick={onPreviousWeekClick} />
        <Typography className={classes.test} color="textPrimary">
          {`${currentMondayDate.toLocaleDateString('pl')} -
            ${new Date(new Date(currentMondayDate).setDate(currentMondayDate.getDate() + 6)).toLocaleDateString('pl')}`}
        </Typography>
        <ChevronRightIcon className={classes.cursor} onClick={onNextWeekClick} />
      </Box>
      <Box
        pl="15px"
        display="flex"
        bgcolor="secondary.main"
        textAlign="center"
        alignItems="center"
        minHeight={50}
        // borderRadius={5}
      >
        {arrayOfWeekdays.map((day) => (
          <Typography className={classes.test} color="textPrimary" key={day}>
            {day}
          </Typography>
        ))}
      </Box>

      <Box width="100%">
        {linesArray.map((line) => (
          <Box key={line} display="flex">
            <Typography className={classes.hourLabel} color="textPrimary">
              {line + startHour}
            </Typography>

            <Box height={100} width="100%" borderBottom="1px solid grey">
              <Box display="flex" height="100%" width="100%" textAlign="center" alignItems="center">
                {arrayOfWeekdays.map((day) => {
                  return (
                    <Box key={day} minWidth="14.2%" justifyContent="center" height="90%" display="flex">
                      {(day === 'Pn' || day === 'Śr') && (
                        <Box
                          display="flex"
                          alignItems="center"
                          bgcolor="primary.light"
                          width="85%"
                          borderRadius={10}

                          // mx={{ xs: 0.5, sm: 2 }}
                          // px={{ xs: 0.5, sm: 2 }}
                        >
                          <Typography className={classes.eventLabel} color="textPrimary">
                            19:00 -20:30 ZG Blonie, Towarowa 23
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
