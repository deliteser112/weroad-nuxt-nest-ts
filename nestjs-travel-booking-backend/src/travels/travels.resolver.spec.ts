import { Test, TestingModule } from '@nestjs/testing';
import { TravelsResolver } from './travels.resolver';
import { TravelsService } from './travels.service';
import { Travel } from './entities/travel.entity';

// Mock data for travels
const mockTravels: Travel[] = [
  {
    id: '1',
    name: 'Test Travel 1',
    description: 'Description for Test Travel 1',
    startingDate: '02/14/2024',
    endingDate: '02/14/2024',
    price: 1000,
    slug: 'iceland-hunting-northern-lights',
    moods: { nature: 80, relax: 20, history: 90, culture: 30, party: 10 },
  },
];

// A mock version of the TravelsService for testing
const mockTravelsService = {
  findAll: jest.fn().mockResolvedValue(mockTravels),
};

describe('TravelsResolver', () => {
  let resolver: TravelsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // Provide both the resolver and a mock version of the service
      providers: [
        TravelsResolver,
        {
          provide: TravelsService,
          useValue: mockTravelsService,
        },
      ],
    }).compile();

    resolver = module.get<TravelsResolver>(TravelsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('travels', () => {
    it('should return an array of travels', async () => {
      // Call the travels method
      const result = await resolver.travels();

      // Ensure the service method is called
      expect(mockTravelsService.findAll).toHaveBeenCalled();

      // Assert that the result is the mock travels data
      expect(result).toEqual(mockTravels);
    });
  });
});
