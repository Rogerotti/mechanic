import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import { IContactUserSectionProps } from './contact-user-section.types';
import { Typography } from '@material-ui/core';
import { Button } from '@core-components/button';

export const ContactUserSection: React.FC<IContactUserSectionProps> = ({
  phoneNumber,
  showPhoneNumberText,
  email,
  showEmailText,
  accountCreationDate,
}) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <Box display="flex" p={1}>
        <PhoneIphoneIcon />
        <Box ml={2}>
          {showPhone ? (
            <Typography>{phoneNumber}</Typography>
          ) : (
            <Button text={showPhoneNumberText} onClick={() => setShowPhone(true)} />
          )}
        </Box>
      </Box>
      <Box display="flex" p={1}>
        <EmailIcon />
        <Box ml={2}>
          {showEmail ? (
            <Typography>{email}</Typography>
          ) : (
            <Button text={showEmailText} onClick={() => setShowEmail(true)} />
          )}
        </Box>
      </Box>
      <Box display="flex" p={1}>
        <CalendarTodayIcon />
        <Box ml={2}>
          <Typography>{accountCreationDate.toLocaleString()}</Typography>
        </Box>
      </Box>
    </>
  );
};
