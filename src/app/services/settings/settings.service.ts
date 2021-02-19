import { NewSettingsEntryDto } from './../../dtos/settings-entry.dto';
import { SettingsUpdateDto } from 'src/app/dtos/settings-update.dto';
import {
  Injectable, Req, ConflictException, InternalServerErrorException, NotFoundException, Param
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
const updateForm = { settingsName:'', page:'', values:{} }
console.log(Req);

@Injectable()
export class SettingsService {
  
  constructor(
    @InjectModel('Settings') private readonly settingsEntryModel: Model<any>,
  ) {}

  async createSettings(newSettingsEntryDto: NewSettingsEntryDto): Promise<void> {

    try {
      return await this.settingsEntryModel.create(newSettingsEntryDto);

    } catch (error) {
      if ((error.code = '11000')) {
        throw new ConflictException('Page Name already exists');
      } else {
        throw new InternalServerErrorException();
      }
      
    }
  };

  async getSettings() {
    return this.settingsEntryModel.find();
  };

  async getSettingsById( id ) {
    try {
      return await this.settingsEntryModel.findById({"_id": id});
    } catch (error) {
      if ((error.reason)) {
        throw new NotFoundException('Id is not valid');
      } else {
        throw new InternalServerErrorException();
      }
    }
    
  };

  async updateSettings( id, settingsUpdateDto: SettingsUpdateDto ) {

    const settingsUpdated = this.settingsEntryModel.findByIdAndUpdate({ "_id": id }, { $set:settingsUpdateDto },{ new:true });
    
    try {
      return await settingsUpdated;

    } catch (error) {
      if ((error)) {
        console.log(error)
        throw new NotFoundException('Id is not Valid');
      } else if (id === null) {
        throw new NotFoundException('Id Cannot be null')
      } else {
        throw new InternalServerErrorException();
      }
      
    }
    
  };

  async deleteSettingById( id ) {
    const deletedSetting = this.settingsEntryModel.findByIdAndDelete({"_id": id});
    try {
      return await deletedSetting;

    } catch (error) {
      if ((error)) {
        console.log(error)
        throw new NotFoundException('Id is not Valid');
      } else if (id === null) {
        throw new NotFoundException('Id Cannot be null')
      } else {
        throw new InternalServerErrorException();
      }
      
    }
  };

}

