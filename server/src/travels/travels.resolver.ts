import { Resolver, Query } from '@nestjs/graphql';
import { Travel } from './entities/travel.entity';
import { TravelsService } from './travels.service';

@Resolver(of => Travel)
export class TravelsResolver {
    constructor(private readonly travelsService: TravelsService) { }

    @Query(returns => [Travel])
    async travels(): Promise<Travel[]> {
        return this.travelsService.findAll();
    }
}