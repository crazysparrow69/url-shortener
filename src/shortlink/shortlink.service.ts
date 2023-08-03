import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Shortlink, ShortlinkDocument } from './schemas/shortlink.schema';
import { CreateShortlinkDto } from './dto/create-shortlink.dto';

@Injectable()
export class ShortlinkService {
  constructor(@InjectModel(Shortlink.name) private shortlinkModel: Model<ShortlinkDocument>) {}

  async create(shortlinkDto: CreateShortlinkDto): Promise<Shortlink> {
    const newShortlink = new this.shortlinkModel(shortlinkDto);
    return newShortlink.save();
  }
}
