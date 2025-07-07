import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entity/Ingredient';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => AppDataSource.options,
    }),
    TypeOrmModule.forFeature([Ingredient]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
