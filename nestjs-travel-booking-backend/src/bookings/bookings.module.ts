// src/bookings/bookings.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
import { BookingsResolver } from './bookings.resolver';
import { Booking } from './entities/booking.entity';
import { Travel } from '../travels/entities/travel.entity'; // Adjust the path as necessary

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Travel])],
  providers: [BookingsResolver, BookingsService],
})
export class BookingsModule { }