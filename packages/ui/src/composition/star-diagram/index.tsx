import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';
import { Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';

import { useStyles } from './star-diagram.styles';
import { IStarDiagrams } from './star-diagram.types';

const renderStars = (numberOfStars: number, classes: ClassNameMap<string>) => {
  const stars = Array.from(Array(numberOfStars).keys());
  return stars.map((i) => <StarIcon key={i} className={classes.star} />);
};

export const StarDiagram: React.FC<IStarDiagrams> = ({
  rating,
  fiveStarPercentage,
  fourStarPercentage,
  threeStarPercentage,
  twoStarPercentage,
  oneStarPercentage,
}) => {
  const classes = useStyles({
    fiveStar: fiveStarPercentage,
    fourStar: fourStarPercentage,
    threeStar: threeStarPercentage,
    twoStar: twoStarPercentage,
    oneStar: oneStarPercentage,
  });

  return (
    <Box>
      <Box p={3} display="flex">
        <Box display="flex" alignItems="center">
          {rating && <Typography className={classes.font}>{rating.toFixed(1)}</Typography>}
        </Box>

        <Box width="100%" ml={2}>
          <Box display="flex">
            {renderStars(5, classes)}
            <Box width="100%" alignItems="center" display="flex">
              <div className={clsx(classes.line, classes.fiveStar)}></div>
            </Box>
          </Box>
          <Box display="flex">
            {renderStars(4, classes)}
            <Box width="100%" alignItems="center" display="flex" ml={2}>
              <div className={clsx(classes.line, classes.fourStar)}></div>
            </Box>
          </Box>
          <Box display="flex">
            {renderStars(3, classes)}
            <Box width="100%" alignItems="center" display="flex" ml={4}>
              <div className={clsx(classes.line, classes.threeStar)}></div>
            </Box>
          </Box>
          <Box display="flex">
            {renderStars(2, classes)}
            <Box width="100%" alignItems="center" display="flex" ml={6}>
              <div className={clsx(classes.line, classes.twoStar)}></div>
            </Box>
          </Box>
          <Box display="flex">
            {renderStars(1, classes)}
            <Box width="100%" alignItems="center" display="flex" ml={8}>
              <div className={clsx(classes.line, classes.oneStar)}></div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StarDiagram;
