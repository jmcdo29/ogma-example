import { Module } from '@nestjs/common';
import { OgmaModule } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    OgmaModule.forRoot({
      service: {
        application: 'NestJS',
        color: true,
        json: false,
      },
      interceptor: {
        http: ExpressParser,
      },
    }),    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
