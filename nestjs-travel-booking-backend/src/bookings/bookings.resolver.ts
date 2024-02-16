// src/bookings/bookings.resolver.ts
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(private readonly bookingsService: BookingsService) {}

  @Mutation(() => Booking)
  async createBooking(
    @Args('createBookingInput') createBookingInput: CreateBookingInput,
  ): Promise<Booking> {
    return this.bookingsService.createBooking(
      createBookingInput.userId,
      createBookingInput.travelId,
      createBookingInput.spots,
    );
  }

  @Mutation(() => Boolean)
  async cancelBooking(@Args('bookingId') bookingId: string): Promise<boolean> {
    await this.bookingsService.cancelBooking(bookingId);
    return true; // You might want to handle errors and return false accordingly
  }

  @Query(() => [Booking])
  async bookingsByUser(@Args('userId') userId: string): Promise<Booking[]> {
    return this.bookingsService.findBookingsByUser(userId);
  }
}
