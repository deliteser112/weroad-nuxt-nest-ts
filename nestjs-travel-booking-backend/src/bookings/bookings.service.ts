// src/bookings/bookings.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { Travel } from '../travels/entities/travel.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
    @InjectRepository(Travel)
    private travelsRepository: Repository<Travel>,
    @InjectConnection() private connection: Connection,
  ) { }

  async createBooking(
    userId: string,
    travelId: string,
    spots: number,
  ): Promise<Booking> {
    const travel = await this.travelsRepository.findOneBy({ id: travelId });
    if (!travel) {
      throw new Error('Travel not found');
    }
    if (travel.bookedSpots + spots > travel.maxCapacity) {
      throw new Error('Not enough spots available');
    }

    const booking = this.bookingsRepository.create({
      userId,
      travel,
      spots,
    });

    travel.bookedSpots += spots; // Update the booked spots
    await this.travelsRepository.save(travel); // Save the updated travel entity

    return this.bookingsRepository.save(booking); // Save and return the new booking
  }

  async cancelBooking(bookingId: string): Promise<void> {
    return this.connection.transaction(async (manager) => {
      const booking = await manager.findOne(Booking, {
        where: { id: bookingId },
        relations: ['travel'],
      });
      if (!booking) {
        throw new Error('Booking not found');
      }

      booking.travel.bookedSpots -= booking.spots; // Decrement the booked spots
      await manager.save(booking.travel); // Save the updated travel entity within the transaction

      await manager.remove(booking); // Remove the booking within the transaction
    });
  }

  async findBookingsByUser(userId: string): Promise<Booking[]> {
    return this.bookingsRepository.find({
      where: { userId },
      relations: ['travel'], // Assuming you want to fetch related travel information
    });
  }
}
