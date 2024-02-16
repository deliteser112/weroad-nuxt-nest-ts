// src/travels/dto/moods.input.ts

import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class MoodsInput {
  @Field(() => Int)
  nature: number;

  @Field(() => Int)
  relax: number;

  @Field(() => Int)
  history: number;

  @Field(() => Int)
  culture: number;

  @Field(() => Int)
  party: number;
}