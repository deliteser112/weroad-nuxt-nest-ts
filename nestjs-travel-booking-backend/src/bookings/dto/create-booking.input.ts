// src/bookings/dto/create-booking.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field()
  userId: string;

  @Field()
  travelId: string;

  @Field(() => Int)
  spots: number;
}