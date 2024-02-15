import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Moods } from './moods.type'; // Make sure to import the Moods type

@ObjectType()
export class Travel {
    @Field(type => ID)
    id: string;

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

    @Field()
    price: number;

    @Field(type => Moods) // Use the Moods GraphQL type here
    moods: Moods;
}