import React, { useState } from 'react';
import { StarDiagram } from '../../composition/star-diagram';
import SortIcon from '@material-ui/icons/Sort';
import { ICommentsSectionProps } from './comments-section.types';
import RatingCard from '@core-components/rating-card';
import { Box, Menu, MenuItem, Typography } from '@material-ui/core';
import { Button } from '@core-components/button';

export const CommentsSection: React.FC<ICommentsSectionProps> = ({
  title,
  comments,
  diagram,
  sortButtonText,
  actionButtonText,
  onActionButtonClick,
  sortOptions,
  onSortClick,
  displayActionButton = true,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const onSortClickCallback = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id?: string) => {
    onSortClick?.(id);
    setAnchorEl(null);
  };

  return (
    <Box p={2}>
      <Box display="flex">
        <Typography
          style={{
            fontSize: '1.5rem',
          }}
        >
          {title}
        </Typography>
      </Box>

      <StarDiagram {...diagram} />
      {sortOptions && (
        <Box style={{ cursor: 'pointer' }} display="flex" alignItems="center" onClick={onSortClickCallback}>
          <SortIcon />
          <Typography
            style={{
              fontSize: '1rem',
              marginLeft: 4,
            }}
          >
            {sortButtonText}
          </Typography>
        </Box>
      )}
      {comments.map((comment) => {
        return <RatingCard key={comment.id} {...comment} />;
      })}
      {displayActionButton && (
        <Box display="flex" justifyContent="center">
          <Button color="secondary" text={actionButtonText} onClick={onActionButtonClick} />
        </Box>
      )}

      {sortOptions && (
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
          <Box bgcolor="primary.main">
            {sortOptions.map((option) => (
              <MenuItem key={option.id} onClick={() => handleClose(option.id)}>
                <Button text={option.value} />
              </MenuItem>
            ))}
          </Box>
        </Menu>
      )}
    </Box>
  );
};

export default CommentsSection;
