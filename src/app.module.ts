import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller.ts';
import { AppService } from './services/app.service.ts';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
