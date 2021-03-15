import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Box from '@material-ui/core/Box';
import ModalMUI from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';

import { IModalProps } from './modal.types';
import { useStyles } from './modal.styles';

function getModalStyle() {
  return {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

export const Modal: React.FC<IModalProps> = ({ title, open, onClose, children, ...rest }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <ModalMUI open={open} onClose={onClose} disableEnforceFocus disableAutoFocus {...rest}>
      <div className={classes.paper} style={modalStyle}>
        <Box
          className={classes.border}
          display="flex"
          bgcolor="secondary.main"
          width="100%"
          height={50}
          alignItems="center"
          p={1.5}
        >
          <Typography className={classes.title}>{title}</Typography>
          <Box display="flex" marginLeft="auto">
            <CancelIcon
              className={classes.closeIcon}
              onClick={(event) => {
                onClose(event, 'escapeKeyDown');
              }}
            />
          </Box>
        </Box>

        <div className={classes.content}>{children}</div>
      </div>
    </ModalMUI>
  );
};
