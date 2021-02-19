import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SettingsConfig extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  settingsName: string;

  @Column()
  values: object;

  @Column()
  page: string;

}
