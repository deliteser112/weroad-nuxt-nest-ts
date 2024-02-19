// src/travels/interfaces/travel.interface.ts
import { Booking } from '../../bookings/entities/booking.entity';
export interface Mood {
  nature: number;
  relax: number;
  history: number;
  culture: number;
  party: number;
}

export interface Travel {
  id: string;
  slug: string;
  name: string;
  description: string;
  startingDate: string;
  endingDate: string;
  price: number;
  maxCapacity: number;
  bookedSpots: number;
  moods: Mood;
  bookings?: Booking[];
}
