import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Ingredient } from './entity/Ingredient';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockRepo = {
  find: jest.fn().mockResolvedValue([{ id: 1, name: 'Mocked' }]),
};

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: getRepositoryToken(Ingredient), useValue: mockRepo },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  describe('root', () => {
    it('Should return an item"', async () => {
      expect(await appService.getHello()).toHaveLength(1);
    });
  });
});
