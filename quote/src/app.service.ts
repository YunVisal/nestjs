import { Injectable } from '@nestjs/common';
import { QuoteService } from './quote/quote.service';
import { ImageService } from './image/image.service';

@Injectable()
export class AppService {
  constructor(
    private quoteService: QuoteService,
    private imageService: ImageService,
  ) {}

  async getQuote() {
    return await this.quoteService.generateQuote();
  }

  async renderQuote(quote: string) {
    return await this.imageService.generateImage(quote);
  }
}
