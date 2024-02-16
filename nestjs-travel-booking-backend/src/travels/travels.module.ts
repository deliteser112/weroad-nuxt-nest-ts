import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Travel } from './entities/travel.entity';
import { TravelsService } from './travels.service';
import { TravelsResolver } from './travels.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Travel])],
  providers: [TravelsService, TravelsResolver]
})
export class TravelsModule { }
