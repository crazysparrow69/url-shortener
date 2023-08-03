import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortlinkController } from './shortlink/shortlink.controller';
import { ShortlinkService } from './shortlink/shortlink.service';
import { ShortlinkModule } from './shortlink/shortlink.module';

@Module({
  imports: [ShortlinkModule],
  controllers: [AppController, ShortlinkController],
  providers: [AppService, ShortlinkService],
})
export class AppModule {}
