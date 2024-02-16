// src/bookings/entities/booking.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Travel } from '../../travels/entities/travel.entity';

@ObjectType()
@Entity()
export class Booking {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column('uuid')
    userId: string; // Assuming you have a User entity that uses UUIDs

    @Field(type => Travel)
    @ManyToOne(() => Travel)
    @JoinColumn({ name: 'travelId' })
    travel: Travel;

    @Field()
    @Column('int')
    spots: number;

    @Field()
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}