import * as mongoose from 'mongoose';

export const SettingsEntrySchemaUpdate = new mongoose.Schema({
    id: { type: String, required: false, unique: false },
    settingsName: { type: String, required: true, unique: false },
    page: { type: String, required: true, unique: true },
    values: { type: Object, required: true, unique: false }
  });