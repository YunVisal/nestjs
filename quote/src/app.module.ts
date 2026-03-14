import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quote.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [QuoteModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
