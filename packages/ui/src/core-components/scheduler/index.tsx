import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IEvent, ISchedulerProps } from './scheduler.types';

import { useStyles } from './scheduler.styles';
import {
  getPreviousMonday,
  getNextSunday,
  isTheSameDay,
  setMidnight,
  getCurrentBorder,
  isMultilineEvent,
} from './scheduler.utils';
import EventEmitter from 'events';

export const Scheduler: React.FC<ISchedulerProps> = ({ startHour, endHour, events }) => {
  if (startHour < 1 || endHour < 2) return null;
  if (startHour >= endHour) return null;
  if (startHour > 23 || endHour > 24) return null;

  const [currentMondayDate, setCurrentMondayDate] = useState(getPreviousMonday(setMidnight(new Date())));

  const currentSaturday = getNextSunday(currentMondayDate);

  const onEventClick = (event: IEvent): void => {
    console.log('event clicked', event);
  };

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

  const numberOfLines = endHour + 1 - startHour;
  const linesArray = Array.from(Array(numberOfLines).keys());

  const currentEvents = events
    .filter((event) => isTheSameDay(event.starDate, event.endDate))
    .filter((event) => {
      return (
        (currentMondayDate < event.starDate && isTheSameDay(currentSaturday, event.endDate)) ||
        event.endDate < currentSaturday
      );
    });

  console.log(currentEvents);

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
            ${currentSaturday.toLocaleDateString('pl')}`}
        </Typography>
        <ChevronRightIcon className={classes.cursor} onClick={onNextWeekClick} />
      </Box>
      <Box pl="15px" display="flex" bgcolor="secondary.main" textAlign="center" alignItems="center" minHeight={50}>
        {arrayOfWeekdays.map((dayTitle) => (
          <Typography className={classes.test} color="textPrimary" key={dayTitle}>
            {dayTitle}
          </Typography>
        ))}
      </Box>

      <Box width="100%">
        {linesArray.map((lineNumber) => {
          const currentHour = lineNumber + startHour;
          return (
            <Box key={currentHour} display="flex">
              <Typography className={classes.hourLabel} color="textPrimary">
                {currentHour}
              </Typography>

              <Box height={100} width="100%" borderBottom="1px solid grey">
                <Box display="flex" height="100%" width="100%" textAlign="center" alignItems="center">
                  {arrayOfWeekdays.map((dayTitle, dayNumber) => {
                    // only find 1 event for each hour i would need to create logic with filter and styling for more then 1 event
                    // change logic to render only 1 box with height 200% or 300% with transform translate(0, 25% or 50%)
                    const currentHourEvent = currentEvents.find(
                      (event) =>
                        (event.starDate.getDay() === 0 ? 6 === dayNumber : event.starDate.getDay() - 1 == dayNumber) &&
                        currentHour >= event.starDate.getHours() &&
                        currentHour < event.endDate.getHours(),
                    );

                    const multiLineEvent = isMultilineEvent(currentHourEvent);
                    const isFirstEvent =
                      !multiLineEvent || (multiLineEvent && currentHour === currentHourEvent.starDate.getHours());
                    const border = getCurrentBorder(currentHourEvent, currentHour);

                    return (
                      <Box
                        key={dayTitle}
                        minWidth="14.2%"
                        maxWidth="14.2%"
                        justifyContent="center"
                        height={multiLineEvent ? '101%' : '90%'}
                        display="flex"
                      >
                        {currentHourEvent && (
                          <Box
                            className={classes.cursor}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="primary.light"
                            width="85%"
                            borderRadius={border}
                            onClick={() => onEventClick(currentHourEvent)}
                          >
                            {isFirstEvent && (
                              <Typography className={classes.eventLabel} color="textPrimary">
                                {currentHourEvent.description}
                              </Typography>
                            )}
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
