// src/travels/dto/create-travel.input.ts

import { InputType, Field, Int } from '@nestjs/graphql';
import { MoodsInput } from './moods.input';

@InputType()
export class CreateTravelInput {
  @Field()
  slug: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  startingDate: string;

  @Field()
  endingDate: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  maxCapacity: number;

  // Assuming Moods is a simple object or enum. Adjust as necessary.
  @Field(() => MoodsInput)
  moods: MoodsInput;
}