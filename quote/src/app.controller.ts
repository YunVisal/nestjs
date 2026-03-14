import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getQuote(@Res({ passthrough: true }) res: Response) {
    const quote = await this.appService.getQuote();
    const image = await this.appService.renderQuote(quote);
    res.setHeader('Content-Type', image.contentType);
    return new StreamableFile(image.data);
  }
}
