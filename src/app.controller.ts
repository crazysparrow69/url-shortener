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

  @Get(":id")
  redirectToFullURL(@Param("id") id: string, @Res() res: Response): void {
    return res.redirect(`https://${id}`);
  }
}
