import { DatabeseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabeseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
