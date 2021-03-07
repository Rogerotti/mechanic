import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Box from '@material-ui/core/Box';
import { Button } from '@core-components/button';
import { ITrainerPageProps } from './trainer-page.types';
import { useStyles } from './trainer-page.styles';
import { Typography } from '@material-ui/core';
import { Rating } from '@core-components/rating';
import { Table } from '@core-components/table';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const TrainerPage: React.FC<ITrainerPageProps> = ({ image, title, description }) => {
  const classes = useStyles();
  const [calendarValue, onCalendarValueChange] = useState(new Date());

  return (
    <Box bgcolor="primary.main" width="100%" height="100%">
      <Box display="table" width="100%" height="100%">
        <div className={classes.column1}>
          <Box display="flex" justifyContent="center">
            <Box>
              <img className={classes.image} src={image} />
              <Typography variant="h4">{title}</Typography>
            </Box>
          </Box>
          <Box pt={2} height>
            <Typography>{description}</Typography>
          </Box>
        </div>
        <div className={classes.column2}>
          <Box>
            <Table headers={[]} data={[]} />
          </Box>
          <Box mt={2} display="flex" justifyContent="center" height="300px" width="100%">
            <Calendar className={classes.test} locale="pl-PL" value={calendarValue} onChange={onCalendarValueChange} />
          </Box>

          <Box mt={2} height="500px" bgcolor="red">
            Oceny
          </Box>
        </div>
        <div className={classes.column1}>
          <Box>
            <Rating value={3.5} precision={0.5} size="small" readOnly={true} numberOfRatings={110} />
            <Button text="Zarezerwuj" variant="contained" color="secondary" />
          </Box>

          <Box mt={2} bgcolor="primary.dark" borderRadius={10} p={1} boxShadow={20}>
            <Box display="flex">
              <PhoneIphoneIcon />
              <Box ml={2}>
                <Typography>+48 886 585 135</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <EmailIcon />
              <Box ml={2}>
                <Typography>roger.skrzypczyk@gmail.com</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <CalendarTodayIcon />
              <Box ml={2}>
                <Typography>Styczeń 2021</Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={2} height="350px" bgcolor="purple">
            <GoogleMapReact
              defaultCenter={{
                lat: 50.06,
                lng: 19.93,
              }}
              defaultZoom={15}
            >
              <LocationOnIcon style={{ color: 'red' }} />
            </GoogleMapReact>
          </Box>
        </div>
      </Box>
      ;
    </Box>
  );
};
