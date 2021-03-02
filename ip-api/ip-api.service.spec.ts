import { Test, TestingModule } from '@nestjs/testing';
import { IpApiService } from './ip-api.service';

describe('IpApiService', () => {
  let service: IpApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpApiService],
    }).compile();

    service = module.get<IpApiService>(IpApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
