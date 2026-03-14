import { Module } from '@nestjs/common';
import { ImageService } from './image.service';

// https://dummyjson.com/docs/image
@Module({
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
