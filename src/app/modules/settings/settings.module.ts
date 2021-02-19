import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsController } from '../../controllers/settings/settings.controller';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { SettingsEntrySchemaUpdate } from 'src/app/schemas/settingsEntry.schema';
import { SettingsRepository } from 'src/app/settings.repository';


@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: 'Settings',
        schema: SettingsEntrySchemaUpdate,
      },
    ]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService]
})
export class SettingsModule {}
