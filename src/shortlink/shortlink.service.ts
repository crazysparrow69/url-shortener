import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Shortlink, ShortlinkDocument } from './schemas/shortlink.schema';
import { CreateShortlinkDto } from './dto/create-shortlink.dto';
import * as shortid from "shortid";

@Injectable()
export class ShortlinkService {
  constructor(@InjectModel(Shortlink.name) private shortlinkModel: Model<ShortlinkDocument>) {}

  async findOne(short: string): Promise<Shortlink> {
    const foundShortlink = await this.shortlinkModel.findOne({ short: short });
    return foundShortlink ? foundShortlink : null;
  }

  async create(shortlinkDto: CreateShortlinkDto): Promise<Shortlink> {
    const shortURL = shortid.generate();
    const newShortlink = new this.shortlinkModel({
      short: shortURL,
      ...shortlinkDto
    });

    return newShortlink.save();
  }
}
