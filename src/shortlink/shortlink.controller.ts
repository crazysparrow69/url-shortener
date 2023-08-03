import { Controller, Post, HttpCode, HttpStatus, Body, Res } from '@nestjs/common';
import { ShortlinkService } from './shortlink.service';
import { CreateShortlinkDto } from './dto/create-shortlink.dto';
import { Response } from 'express';

const isValidURL = (url: string) => {try { new URL(url); return true } catch(e) { return false }};

@Controller('shortlink')
export class ShortlinkController {
  constructor(private readonly shortlinkService: ShortlinkService) {
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createShortlinkDto: CreateShortlinkDto, @Res() res: Response) {
    const fullURL = createShortlinkDto.full;
    if (!isValidURL(fullURL) || fullURL.length > 1000) {
      return res.status(400).json({ message: "Incorrect URL" });
    }

    const createdShortlink = await this.shortlinkService.create(createShortlinkDto);
  
    return res.json(createdShortlink);
  }
}
