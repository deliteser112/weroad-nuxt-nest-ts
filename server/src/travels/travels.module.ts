import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsResolver } from './travels.resolver';

@Module({
  providers: [TravelsService, TravelsResolver]
})
export class TravelsModule {}
