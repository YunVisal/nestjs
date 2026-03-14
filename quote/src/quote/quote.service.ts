import { Injectable } from '@nestjs/common';
import { DummyJsonApiResponseDto } from './dto/response.dto';

@Injectable()
export class QuoteService {
  async generateQuote() {
    const res = await fetch('https://dummyjson.com/quotes/random');
    const json = await res.json();
    const dto = json as DummyJsonApiResponseDto;
    return `${dto.quote} - ${dto.author}`;
  }
}
