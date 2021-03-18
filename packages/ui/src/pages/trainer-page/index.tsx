import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { Button } from '@core-components/button';
import { ITrainerPageProps } from './trainer-page.types';
import { useStyles } from './trainer-page.styles';
import { Theme, Typography } from '@material-ui/core';
import { Table } from '@core-components/table';
import { Modal } from '@core-components/modal';
import { CommentsSection } from '../../composition/comments-section';
import { HeroImage } from '../../composition/hero-image';
import { Scheduler } from '../../core-components/scheduler';

import { IEvent } from '@core-components/scheduler/scheduler.types';
import { ContactUserSection } from '../../composition/contact-user-section';
import { MapSection } from '../../composition/map-section';

export const TrainerPage: React.FC<ITrainerPageProps> = ({
  hero,
  image,
  title,
  description,
  commentsSection,
  userContactSection,
  bookText,
  onBookClick,
  mapSection,
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

  const TrainerDescriptionPanel = () => (
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

  const ContentPanel = () => (
    <>
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

      <Box mt={2} borderRadius={10} border="1px solid" padding={1}>
        <Table headers={[]} data={[]} />
      </Box>

      <Box mt={2} border="1px solid" borderColor="white" borderRadius={10} overflow="hidden">
        <Box bgcolor="primary.main">
          <CommentsSection {...commentsSection} />
        </Box>
      </Box>
    </>
  );

  const ContactPanel = () => (
    <>
      <Box>
        <Button
          style={{
            width: '100%',
            fontSize: 16,
            borderRadius: 10,
            height: 50,
          }}
          text={bookText}
          onClick={onBookClick}
          variant="contained"
          color="secondary"
        />
      </Box>

      <Box mt={2} bgcolor="primary.main" borderRadius={10} p={1} border="1px solid" borderColor="white">
        <ContactUserSection {...userContactSection} />
      </Box>

      <MapSection {...mapSection} />
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
            <div className={classes.column1}>{TrainerDescriptionPanel()}</div>
            <div className={classes.column2}>{ContentPanel()}</div>
            <div className={classes.column1}>{ContactPanel()}</div>
          </>
        ) : (
          <Box padding={0.5}>
            <Box>{TrainerDescriptionPanel()}</Box>
            {ContactPanel()} {ContentPanel()}
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
