import { SettingsService } from './../../services/settings/settings.service';
import { Test, TestingModule } from '@nestjs/testing';
import { SettingsController } from './settings.controller';

const mockSettingsService = () => ({

});

describe('Settings Controller', () => {
  let controller: SettingsController;
  let settingsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettingsController],
      providers: [
        { provide: SettingsService, useFactory: mockSettingsService }
      ]
    }).compile();

    controller = module.get<SettingsController>(SettingsController);
    settingsService = module.get<SettingsService>(SettingsService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
