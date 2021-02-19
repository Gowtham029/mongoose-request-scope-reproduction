import { Inject, Injectable, Logger, Scope, Request } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import * as config from 'config';
import { DatabaseConfig } from 'config/config.interfaces';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(
    @Inject(REQUEST) private readonly request: Request) {
}
  getDbConfig() {
    const dbConfig: DatabaseConfig = config.get('db');
    const mongoURI = this.request["DB_URI"] || process.env.MONGOURI || dbConfig.mongoURI;
    Logger.log('Mongo DB Configuration', mongoURI);
    return mongoURI;
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.getDbConfig(),
    };
  }
}
