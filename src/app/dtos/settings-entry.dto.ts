import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class NewSettingsEntryDto {
  
  @IsOptional()
  settingsName: string;

  @IsString()
  @MinLength(4)
  @MaxLength(200)
  page: string;

  values: object;

}
