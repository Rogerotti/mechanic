import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Box from '@material-ui/core/Box';
import { Button } from '@core-components/button';
import { ITrainerPageProps } from './trainer-page.types';
import { useStyles } from './trainer-page.styles';
import { Typography } from '@material-ui/core';
import { Map } from '@core-components/map';
import { Table } from '@core-components/table';
import { Modal } from '@core-components/modal';
import { CommentsSection } from '../../composition/comments-section';
import { HeroImage } from '../../composition/hero-image';
import { Scheduler } from '../../core-components/scheduler';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { IEvent } from '@core-components/scheduler/scheduler.types';

export const TrainerPage: React.FC<ITrainerPageProps> = ({
  hero,
  image,
  title,
  description,
  commentsSection,
  events,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [currentEvent, setCurrentEvent] = useState<IEvent>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const onEventClick = (event: IEvent) => {
    setOpen(true);
    setCurrentEvent(event);
  };

  return (
    <Box bgcolor="primary.main" width="100%" height="100%">
      <Box height={250}>
        <HeroImage {...hero} />
      </Box>
      <Box display="table" width="100%" height="100%">
        <div className={classes.column1}>
          <Box display="flex" justifyContent="center">
            <Box display="grid">
              <img className={classes.image} src={image} />
              <Typography className={classes.title} variant="h4">
                {title}
              </Typography>
            </Box>
          </Box>
          <Box p={1.5} height>
            <Typography className={classes.description}>{description}</Typography>
          </Box>
        </div>
        <div className={classes.column2}>
          {/* <Box borderRadius={10} border="1px solid" padding={1}>
            <Table headers={[]} data={[]} />
          </Box> */}
          <Box
            mt={2}
            justifyContent="center"
            maxHeight={500}
            overflow="auto"
            width="100%"
            borderRadius={10}
            border="1px solid"
            padding={1}
          >
            <Scheduler startHour={10} endHour={22} events={events} onEventClick={onEventClick} />
          </Box>

          <Box mt={2} border="1px solid" borderColor="white" borderRadius={10} overflow="hidden">
            <Box bgcolor="primary.main">
              <CommentsSection {...commentsSection} />
            </Box>
          </Box>
        </div>
        <div className={classes.column1}>
          <Box>
            {/* <Rating value={3.5} precision={0.5} size="small" readOnly={true} numberOfRatings={110} /> */}
            <Button
              style={{
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
                height: 50,
              }}
              text="Zarezerwuj"
              variant="contained"
              color="secondary"
            />
          </Box>

          <Box mt={2} bgcolor="primary.main" borderRadius={10} p={1} border="1px solid" borderColor="white">
            <Box display="flex" p={1}>
              <PhoneIphoneIcon />
              <Box ml={2}>
                <Typography>+48 886 585 135</Typography>
              </Box>
            </Box>
            <Box display="flex" p={1}>
              <EmailIcon />
              <Box ml={2}>
                <Typography>roger.skrzypczyk@gmail.com</Typography>
              </Box>
            </Box>
            <Box display="flex" p={1}>
              <CalendarTodayIcon />
              <Box ml={2}>
                <Typography>Styczeń 2021</Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={2} p={1} bgcolor="primary.main" borderRadius={10} border="1px solid" borderColor="white">
            <Box p={2}>
              <Typography
                style={{
                  fontSize: 22,
                }}
              >
                ul. Na Zakolu Wisły 12b/6
              </Typography>
              <Typography
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                }}
              >
                25 km od ciebie
              </Typography>
            </Box>

            <Box height="300px" borderRadius={10}>
              <Map
                className={classes.map}
                position={{
                  x: 50.05304455463954,
                  y: 19.984250240851726,
                }}
                zoom={15}
              />
            </Box>
          </Box>
        </div>
      </Box>
      <Modal title={currentEvent?.description} open={open} onClose={handleClose}>
        <Box height={300} width={400}>
          {currentEvent?.description}
        </Box>
      </Modal>
    </Box>
  );
};
