import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import * as config from 'config';
import { ServerConfig } from 'config/config.interfaces';
import { Logger } from '@nestjs/common';
import { composeURLENV } from 'get-env';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server: ServerConfig = config.get('server');
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.port || server.port;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
  await overrideDefaults(app);
}

bootstrap();

async function overrideDefaults(app) {
  const url = await app.getUrl();
  const currentURI = new URL(url);
  new composeURLENV(currentURI);
}
