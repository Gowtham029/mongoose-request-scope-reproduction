import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class SettingsUpdateDto {

    @IsOptional()
    id: string;

    @IsString()
    @MinLength(0)
    @MaxLength(20)
    settingsName: string;
  
    @IsString()
    @MinLength(4)
    @MaxLength(200)
    page: string;
  
    values: object;
}
