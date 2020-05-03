import { GroupTrip } from './group-trip';
import { groupTrip } from './dummy-data';

// TODO: connect to backend
export function getParentGroupTrip(childTripId: number): GroupTrip | undefined {
  if (childTripId === 1) return groupTrip;
  else return undefined;
}
