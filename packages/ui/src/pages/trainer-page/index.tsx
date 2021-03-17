import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { Button } from '@core-components/button';
import { ITrainerPageProps } from './trainer-page.types';
import { useStyles } from './trainer-page.styles';
import { Theme, Typography } from '@material-ui/core';
import { Map } from '@core-components/map';
import { Table } from '@core-components/table';
import { Modal } from '@core-components/modal';
import { CommentsSection } from '../../composition/comments-section';
import { HeroImage } from '../../composition/hero-image';
import { Scheduler } from '../../core-components/scheduler';

import { IEvent } from '@core-components/scheduler/scheduler.types';
import { ContactUserSection } from '../../composition/contact-user-section';

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
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const handleClose = () => {
    setOpen(false);
  };

  const onEventClick = (event: IEvent) => {
    setOpen(true);
    setCurrentEvent(event);
  };

  const Panel1 = () => (
    <>
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
    </>
  );

  const Panel2 = () => (
    <>
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
    </>
  );

  const Panel3 = () => (
    <>
      <Box>
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
        <ContactUserSection
          phoneNumber="+48 886 585 135"
          email="roger.skrzypczyk@gmail.com"
          showEmailText="Wyświetl e-mail"
          showPhoneNumberText="Wyświetl numer"
          accountCreationDate={new Date()}
        />
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
    </>
  );

  return (
    <Box bgcolor="primary.main" width="100%" height="100%">
      <Box height={250}>
        <HeroImage {...hero} />
      </Box>
      <Box display="table" width="100%" height="100%">
        {isDesktop ? (
          <>
            <div className={classes.column1}>{Panel1()}</div>
            <div className={classes.column2}>{Panel2()}</div>
            <div className={classes.column1}>{Panel3()}</div>
          </>
        ) : (
          <Box padding={0.5}>
            {Panel1()} {Panel3()} {Panel2()}
          </Box>
        )}
      </Box>
      <Modal title={currentEvent?.description} open={open} onClose={handleClose}>
        <Box height={300} width={400}>
          {currentEvent?.description}
        </Box>
      </Modal>
    </Box>
  );
};
