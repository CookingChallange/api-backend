import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ingredient } from './entity/Ingredient';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Ingredient[]> {
    return this.appService.getHello();
  }

  @Get('insert')
  async insert(): Promise<string> {
    return this.appService.insert();
  }
}
