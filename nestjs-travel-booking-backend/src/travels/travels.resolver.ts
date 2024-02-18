// src/travels/travels.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Travel } from './entities/travel.entity';
import { TravelsService } from './travels.service';
import { CreateTravelInput } from './dto/create-travel.input';

@Resolver((of) => Travel)
export class TravelsResolver {
  constructor(private readonly travelsService: TravelsService) {}

  @Query((returns) => [Travel])
  async travels(): Promise<Travel[]> {
    return this.travelsService.findAll();
  }

  @Mutation(() => Travel)
  async createTravel(
    @Args('createTravelInput') createTravelInput: CreateTravelInput,
  ): Promise<Travel> {
    return this.travelsService.createTravel(createTravelInput);
  }
}
