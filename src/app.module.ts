import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortlinkController } from './shortlink/shortlink.controller';
import { ShortlinkService } from './shortlink/shortlink.service';
import { ShortlinkModule } from './shortlink/shortlink.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Shortlink, ShortlinkSchema } from './shortlink/schemas/shortlink.schema';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ShortlinkModule,
    MongooseModule.forRoot(
      process.env.DATABASE_URI,
    ),
    MongooseModule.forFeature([
      { name: Shortlink.name, schema: ShortlinkSchema },
    ]),
  ],
  controllers: [AppController, ShortlinkController],
  providers: [AppService, ShortlinkService],
})
export class AppModule {}
