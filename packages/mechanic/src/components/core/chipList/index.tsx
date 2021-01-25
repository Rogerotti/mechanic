import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useTranslation from '../../../translations/hooks';

interface ChipListProps {
  general: any[];
  additional: any[];
  label: string;
  className: string;
}

const useStyles = makeStyles({
  card: {
    width: '50%',
    height: '300px',
    backgroundColor: 'white',
  },
  image: {
    height: '200px',
    width: '150px',
  },
  item: {
    marginRight: 5,
  },
  label: {
    marginBottom: 5,
  },
});

const ChipList: React.FC<ChipListProps> = ({ className, general, additional, label }) => {
  const classes = useStyles();
  const { getText } = useTranslation();
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
          label={`${additional.length} ${getText('more')}`}
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
          label={getText('showLess')}
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
