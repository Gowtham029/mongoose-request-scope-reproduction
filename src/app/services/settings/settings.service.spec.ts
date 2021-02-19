import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SettingsRepository } from '../../settings.repository';
import { SettingsService } from './settings.service';
import { NewSettingsEntryDto } from '../../dtos/settings-entry.dto';

const mockSettingsConfigRepository = () => ({
  getSettings: jest.fn(),
  findOne: jest.fn().mockResolvedValue({
    settingsName: 'some name',
    values: {},
    page: 'some page'
  }),
});

describe('SettingsService', () => {
  let service: SettingsService;
  let repository: SettingsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SettingsService,
        {
          provide: SettingsRepository,
          useFactory: mockSettingsConfigRepository,
        },
      ],
    }).compile();

    service = module.get<SettingsService>(SettingsService);
    repository = module.get<SettingsRepository>(SettingsRepository);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

