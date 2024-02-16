// src/travels/travels.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from './entities/travel.entity';
import { CreateTravelInput } from './dto/create-travel.input';

@Injectable()
export class TravelsService {
  private readonly travels: Travel[];

  constructor(
    @InjectRepository(Travel)
    private travelRepository: Repository<Travel>,
  ) {}

  async createTravel(createTravelInput: CreateTravelInput): Promise<Travel> {
    const newTravel = this.travelRepository.create(createTravelInput);
    return this.travelRepository.save(newTravel);
  }

  async findAll(): Promise<Travel[]> {
    return this.travelRepository.find();
  }
}
