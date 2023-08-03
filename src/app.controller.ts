import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ShortlinkService } from './shortlink/shortlink.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly shortlinkService: ShortlinkService,
  ) {}

  @Get(":short")
  async redirectToFullURL(@Param("short") short: string, @Res() res: Response) {
    const foundShortlink = await this.shortlinkService.findOne(short);
    
    return foundShortlink ? res.redirect(foundShortlink.full) : res.end("404 not found");
  }
}
