import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './travels/graphql/graphql.module';
import { TravelsModule } from './travels/travels.module';

@Module({
  imports: [GraphqlModule, TravelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
