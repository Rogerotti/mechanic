import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ISchedulerProps } from './scheduler.types';

import { useStyles } from './scheduler.styles';
import {
  getPreviousMonday,
  getNextSunday,
  isTheSameDay,
  setMidnight,
  setEndOfTheDay,
  isMultilineEvent,
  addDays,
  getEventLength,
} from './scheduler.utils';
import { EVENT_HEIGHT, WEEKEND_NAMES } from './scheduler.constants';

export const Scheduler: React.FC<ISchedulerProps> = ({
  startHour,
  endHour,
  events,
  bgcolor = 'primary.main',
  onEventClick,
  onCurrentDateChange,
}) => {
  if (startHour < 1 || endHour < 2) return null;
  if (startHour >= endHour) return null;
  if (startHour > 23 || endHour > 24) return null;

  const classes = useStyles();
  const [currentMondayDate, setCurrentMondayDate] = useState(getPreviousMonday(setMidnight(new Date())));
  const currentSaturday = getNextSunday(setEndOfTheDay(currentMondayDate));

  const onPreviousWeekClick = () => {
    setCurrentMondayDate(addDays(currentMondayDate, -7));
  };

  const onNextWeekClick = () => {
    setCurrentMondayDate(addDays(currentMondayDate, +7));
  };

  useEffect(() => {
    onCurrentDateChange?.(currentMondayDate);
  }, [currentMondayDate]);

  const numberOfHours = endHour - startHour + 1;
  const hours = Array.from({ length: numberOfHours }, (_, i) => i + startHour);

  const currentEvents = events
    .filter((event) => isTheSameDay(event.starDate, event.endDate))
    .filter((event) => {
      return currentMondayDate <= event.starDate && event.endDate <= currentSaturday;
    });

  return (
    <Box
      bgcolor={bgcolor}
      style={{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <Box
        style={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        bgcolor="secondary.main"
        textAlign="center"
        pt={1}
      >
        <ChevronLeftIcon className={classes.cursor} onClick={onPreviousWeekClick} />
        <Typography color="textPrimary">
          {`${currentMondayDate.toLocaleDateString('pl')} -
            ${currentSaturday.toLocaleDateString('pl')}`}
        </Typography>
        <ChevronRightIcon className={classes.cursor} onClick={onNextWeekClick} />
      </Box>
      <Box pl="15px" display="flex" bgcolor="secondary.main" textAlign="center" alignItems="center" minHeight={50}>
        {WEEKEND_NAMES.map((dayTitle) => (
          <Typography
            style={{
              minWidth: '14.2%',
            }}
            color="textPrimary"
            key={dayTitle}
          >
            {dayTitle}
          </Typography>
        ))}
      </Box>

      <Box width="100%">
        {hours.map((hour) => {
          const displayHour = hour;
          const currentHour = displayHour - 1;
          // const id = `${dayTitle}-${hour}`; todo
          return (
            <Box key={hour} display="flex">
              <Typography className={classes.hourLabel} color="textPrimary">
                {displayHour}
              </Typography>

              <Box height={EVENT_HEIGHT} width="100%" borderBottom="1px solid grey">
                <Box display="flex" height="100%" width="100%" textAlign="center" alignItems="center">
                  {WEEKEND_NAMES.map((dayTitle, dayNumber) => {
                    // only find 1 event for each hours so no overlapping implemented i would need to create logic with filter and styling for more then 1 event
                    const currentHourEvent = currentEvents.find(
                      (event) =>
                        (event.starDate.getDay() === 0 ? 6 === dayNumber : event.starDate.getDay() - 1 == dayNumber) &&
                        currentHour >= event.starDate.getHours() &&
                        currentHour < event.endDate.getHours(),
                    );

                    const eventLength = getEventLength(currentHourEvent);
                    const multiLineEvent = isMultilineEvent(currentHourEvent);

                    const isFirstEvent =
                      !multiLineEvent || (multiLineEvent && currentHour === currentHourEvent.starDate.getHours());

                    if (!isFirstEvent || !currentHourEvent) return <div style={{ width: '85%' }} />;

                    const height = multiLineEvent ? eventLength * (EVENT_HEIGHT - 1) : EVENT_HEIGHT - 10;
                    const translateValue = multiLineEvent ? (eventLength - 1) * (EVENT_HEIGHT / 2) : 0;

                    return (
                      <Box
                        key={currentHourEvent.id}
                        minWidth="14.2%"
                        maxWidth="14.2%"
                        justifyContent="center"
                        height={`${height}px`}
                        display="flex"
                        style={{
                          transform: `translateY(${translateValue}px)`,
                        }}
                      >
                        {currentHourEvent && (
                          <Box
                            className={clsx(classes.cursor, classes.event)}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="primary.light"
                            width="85%"
                            borderRadius={15}
                            onClick={() => onEventClick?.(currentHourEvent)}
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
