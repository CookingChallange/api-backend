import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entity/Ingredient';
import { AppDataSource } from './data-source';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async getHello(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find();
  }

  async insert(): Promise<string> {
    const ingredients = await this.ingredientRepository.find();

    if (ingredients.find(({ name }) => name === 'onion'))
      return 'has been previously saved';

    const ingredient = new Ingredient();
    ingredient.name = 'onion';
    await AppDataSource.manager.save(ingredient);
    return 'saved';
  }
}
