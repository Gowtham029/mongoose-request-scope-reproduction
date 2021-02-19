import * as mongoose from 'mongoose';

export const SettingsEntrySchemaUpdate = new mongoose.Schema({
  settingsName: { type: String, required: true, unique: false },
  page: { type: String, required: true, unique: false },
  values: { type: Object, required: true, unique: false }
});
