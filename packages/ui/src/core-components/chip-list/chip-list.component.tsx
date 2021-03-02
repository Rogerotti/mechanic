import React, { useState } from 'react';
import clsx from 'clsx';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IChipListProps } from './chip-list.types';
import { useStyles } from './chips-list.styles';

const ChipList: React.FC<IChipListProps> = ({ className, general, additional, label, getMoreText, showLessText }) => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={className}>
      <Typography className={classes.label}>{label}</Typography>
      {general.map((data) => {
        return (
          <Chip
            className={clsx(classes.item, classes.chip)}
            key={data.id}
            variant="outlined"
            color="secondary"
            label={data.value}
          />
        );
      })}
      {additional && additional.length > 0 && !showMore && (
        <Chip
          className={classes.chip}
          variant="outlined"
          label={`${additional.length} ${getMoreText}`}
          color="secondary"
          onDelete={() => {
            setShowMore(!showMore);
          }}
          deleteIcon={<ExpandMoreIcon />}
        />
      )}
      {showMore &&
        additional &&
        additional.map((data) => {
          return (
            <Chip
              key={data.id}
              className={clsx(classes.item, classes.chip)}
              variant="outlined"
              color="secondary"
              label={data.value}
            />
          );
        })}
      {showMore && (
        <Chip
          className={classes.chip}
          variant="outlined"
          label={showLessText}
          color="secondary"
          onDelete={() => {
            setShowMore(!showMore);
          }}
          deleteIcon={<ExpandLessIcon />}
        />
      )}
    </div>
  );
};

export default ChipList;
