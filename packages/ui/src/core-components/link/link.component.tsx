import React from 'react';
import clsx from 'clsx';
import { Link as MUILink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ILinkProps } from './link.types';
import { useStyles } from './link.styles';
import { LinkEnum } from '../../types/core';

export const Link: React.FC<ILinkProps> = ({ text, className, linkType = LinkEnum.Internal, url, ...rest }) => {
  const classes = useStyles();

  if (linkType === LinkEnum.Internal) {
    return (
      <MUILink component={RouterLink} className={clsx(classes.cursor, className)} to={url} {...rest}>
        {text}
      </MUILink>
    );
  }

  if (linkType === LinkEnum.External) {
    return (
      <MUILink className={clsx(classes.cursor, className)} href={url} {...rest}>
        {text}
      </MUILink>
    );
  }

  if (linkType === LinkEnum.Button) {
    const { color, onClick } = rest;

    return (
      <MUILink component="button" className={clsx(classes.cursor, className)} color={color} onClick={onClick}>
        {text}
      </MUILink>
    );
  }

  return null;
};
