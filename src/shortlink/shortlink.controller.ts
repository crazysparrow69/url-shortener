import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { ShortlinkService } from './shortlink.service';
import { CreateShortlinkDto } from './dto/create-shortlink.dto';

@Controller('shortlink')
export class ShortlinkController {
  constructor(private readonly shortlinkService: ShortlinkService) {
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createShortlinkDto: CreateShortlinkDto) {
    return `full: ${createShortlinkDto.full}`;
  }
}
