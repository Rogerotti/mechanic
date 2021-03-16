import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IMapProps } from './map.types';
import { useStyles } from './map.styles';

/**
 *  add to project
 *    <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />;
      </Helmet>
 * @returns 
 */
export const Map: React.FC<IMapProps> = ({ className, position, zoom }) => {
  const classes = useStyles();

  return (
    <MapContainer
      style={{
        height: '100%',
      }}
      className={className}
      center={[position.x, position.y]}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.x, position.y]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
