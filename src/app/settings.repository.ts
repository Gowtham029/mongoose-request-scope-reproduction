import { EntityRepository, Repository } from 'typeorm';
import { SettingsConfig } from './settings.entity';
import { NewSettingsEntryDto } from './dtos/settings-entry.dto';

@EntityRepository(SettingsConfig)
export class SettingsRepository extends Repository<SettingsConfig> {
  
  async getSettings(
      entryDto: NewSettingsEntryDto,
  ): Promise<SettingsConfig[]> {
    const { settingsName, values, page } = entryDto;
    const query = this.createQueryBuilder('settingsConfiguration');

    if(settingsName) {
        query.andWhere('settingsConfiguration.settingsName = :settingsName', { settingsName });
    }

    if(page) {
        query.andWhere('settingsConfiguration.page = :page', { page });
    }

    if(values) {
        query.andWhere('settingsConfiguration.values = :values', { values });
    }

    const configurations = await query.getMany();
    return configurations;
  }

  async createSettings(
    newSettingsEntryDto: NewSettingsEntryDto,
  ): Promise<SettingsConfig> {
    const { settingsName, page, values } = newSettingsEntryDto;
    const settingsConfiguration = new SettingsConfig();
    settingsConfiguration.settingsName = settingsName;
    settingsConfiguration.values = values;
    settingsConfiguration.page = page;
    await settingsConfiguration.save();

    return settingsConfiguration;
  }
}
