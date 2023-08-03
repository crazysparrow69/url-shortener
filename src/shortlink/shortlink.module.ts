import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortlinkService } from './shortlink.service';
import { ShortlinkController } from './shortlink.controller';
import { Shortlink, ShortlinkSchema } from './schemas/shortlink.schema';

@Module({
  providers: [ShortlinkService],
  controllers: [ShortlinkController],
  imports: [
    MongooseModule.forFeature([
      { name: Shortlink.name, schema: ShortlinkSchema },
    ]),
  ],
})
export class ShortlinkModule {}
