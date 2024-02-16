// src/travels/entities/moods.type.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Moods {
    @Field((type) => Int)
    nature: number;

    @Field((type) => Int)
    relax: number;

    @Field((type) => Int)
    history: number;

    @Field((type) => Int)
    culture: number;

    @Field((type) => Int)
    party: number;
}
