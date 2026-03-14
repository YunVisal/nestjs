import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';

// https://dummyjson.com/docs/quotes
@Module({
  providers: [QuoteService],
  exports: [QuoteService],
})
export class QuoteModule {}
