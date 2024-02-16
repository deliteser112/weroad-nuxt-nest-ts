// src/travels/entities/travel.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Moods } from './moods.type';
import { Booking } from '../../bookings/entities/booking.entity';

@ObjectType()
@Entity() // Mark this class as a TypeORM entity
export class Travel {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid') // Use 'uuid' or omit for numeric IDs
    id: string;

    @Field()
    @Column()
    slug: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column('text')
    description: string;

    @Field()
    @Column()
    startingDate: string; // Changed to Date type

    @Field()
    @Column()
    endingDate: string; // Changed to Date type

    @Field()
    @Column('int')
    price: number;

    @Field()
    @Column('int')
    maxCapacity: number;

    @Field()
    @Column({ default: 0 })
    bookedSpots: number;

    @Field(type => Moods)
    @Column({ type: 'json' })
    moods: Moods; // Ensure there's a mechanism to persist and load this complex type

    @OneToMany(() => Booking, booking => booking.travel)
    bookings?: Booking[];
}