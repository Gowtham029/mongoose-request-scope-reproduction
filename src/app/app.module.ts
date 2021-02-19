import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { MongooseConfigService } from './services/auth/mongoose-config.service';
import { SettingsModule } from './modules/settings/settings.module';
import { DBMiddleware } from './middlewares/db.connection.middleware';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(DBMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
}
}
