// src/app.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './travels/graphql/graphql.module';
import { TravelsModule } from './travels/travels.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule globally available
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres', // as we are using postgres
        host: config.get('DATABASE_HOST'),
        port: +config.get('DATABASE_PORT'), // the unary operator (+) converts string to number
        username: config.get('DATABASE_USERNAME'),
        password: config.get('DATABASE_PASSWORD'),
        database: config.get('DATABASE_NAME'),
        synchronize: config.get('DATABASE_SYNCHRONIZE') === 'true', // convert string to boolean
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
    GraphqlModule,
    TravelsModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements OnModuleInit {
  constructor(private readonly connection: Connection) { }

  async onModuleInit() {
    try {
      await this.connection.connect();
      if (this.connection.isConnected) {
        console.log('Database connection established');
      }
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }
}