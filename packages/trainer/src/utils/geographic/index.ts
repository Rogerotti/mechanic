import { IPosition } from '../../interfaces';

// Convert Degress to Radians
function Deg2Rad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function getDistance(pos1: IPosition, pos2: IPosition): number {
  //Country1 Latitude  pos1.x and longitude  pos1.y
  //Country2 Latitude  49.25 and longitude  -123.12
  const lat1 = Deg2Rad(pos1.x);
  const lat2 = Deg2Rad(pos2.x);
  const lon1 = Deg2Rad(pos1.y);
  const lon2 = Deg2Rad(pos2.y);
  const latDiff = lat2 - lat1;
  const lonDiff = lon2 - lon1;
  const R = 6371000; // metres
  const φ1 = lat1;
  const φ2 = lat2;
  const Δφ = latDiff;
  const Δλ = lonDiff;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * R;
}
