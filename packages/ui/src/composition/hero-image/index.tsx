import React from 'react';

import { useStyles } from './hero-image.styles';
import { IHeroImageProps } from './hero-image.types';

export const HeroImage: React.FC<IHeroImageProps> = ({ image, title, subtitle }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div className={classes.heroText}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroImage;
