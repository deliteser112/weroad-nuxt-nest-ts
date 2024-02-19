export interface Moods {
  nature: number;
  relax: number;
  history: number;
  culture: number;
  party: number;
}
export interface Travel {
  id: string;
  name: string;
  description: string;
  startingDate: string;
  endingDate: string;
  price: number;
  bookedSpots: number;
  maxCapacity: number;
  moods: Moods;
}