import { NewSettingsEntryDto } from './../../dtos/settings-entry.dto';
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Req,
  Get,
  HttpCode,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingsService } from './../../services/settings/settings.service';
import { SettingsUpdateDto } from './../../dtos/settings-update.dto';

@Controller('v1/settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}
  @Post()
  createSettings(
    @Body(ValidationPipe) newSettingsEntryDto: NewSettingsEntryDto,
  ): Promise<void> {
    return this.settingsService.createSettings(newSettingsEntryDto);
  }

  @Get()
  getSettings() {
    return this.settingsService.getSettings();
  };

  @Get('/:id')
  getSettingsById(@Param('id') id) {
    return this.settingsService.getSettingsById(id);
  };

  @Patch('/:id')
  updateSettings(@Param('id') id,
    @Body(ValidationPipe) settingsUpdateDto: SettingsUpdateDto){
    return this.settingsService.updateSettings(id, settingsUpdateDto);
  };
 
  @Delete('/:id')
  deleteSettingById(@Param('id') id) { 
    return this.settingsService.deleteSettingById(id);
  };

}
