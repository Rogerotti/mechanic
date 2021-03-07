import React from 'react';

import { useStyles } from './hero-image.styles';
import { IHeroImageProps } from './hero-image.types';

export const HeroImage: React.FC<IHeroImageProps> = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.heroImage}>
      <div className={classes.heroText}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroImage;
