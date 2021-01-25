import React, { useState } from 'react';
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
        return <Chip className={classes.item} key={data.id} variant="outlined" color="primary" label={data.name} />;
      })}
      {additional && additional.length > 0 && !showMore && (
        <Chip
          variant="outlined"
          label={`${additional.length} ${getMoreText}`}
          color="primary"
          onDelete={() => {
            setShowMore(!showMore);
          }}
          deleteIcon={<ExpandMoreIcon />}
        />
      )}
      {showMore &&
        additional.map((data) => {
          return <Chip key={data.id} className={classes.item} variant="outlined" color="primary" label={data.name} />;
        })}
      {showMore && (
        <Chip
          variant="outlined"
          label={showLessText}
          color="primary"
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
