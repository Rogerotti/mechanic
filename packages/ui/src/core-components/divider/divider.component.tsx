import React from 'react';
import Box from '@material-ui/core/Box';
import { Divider as MUIDivider, Typography } from '@material-ui/core';
import { IDividerProps } from './divider.types';
import { useStyles } from './divider.styles';

export const Divider: React.FC<IDividerProps> = ({ text, orientation = 'horizontal' }) => {
  const classes = useStyles();
  if (!text) {
    return <MUIDivider orientation={orientation} />;
  }

  if (orientation === 'horizontal') {
    return (
      <div className={classes.container}>
        <div className={classes.border} />
        <Typography className={classes.content}>{text}</Typography>
        <div className={classes.border} />
      </div>
    );
  }

  return (
    <Box display="flex" justifyContent="center" height="100%">
      <Box>
        <MUIDivider className={classes.vertical} orientation={orientation} />
        <Typography className={classes.content}>{text}</Typography>
        <MUIDivider className={classes.vertical} orientation={orientation} />
      </Box>
    </Box>
  );
};
