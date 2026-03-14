import { Injectable } from '@nestjs/common';

export type ImageResult = {
  data: Buffer;
  contentType: string;
};

@Injectable()
export class ImageService {
  async generateImage(content: string): Promise<ImageResult> {
    const contentParam = content.split(' ').join('+');
    const url = `https://dummyjson.com/image/1080x720/008080/ffffff?text=${contentParam}&fontSize=24`;
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    const contentType = res.headers.get('content-type') ?? 'image/png';
    return { data: Buffer.from(arrayBuffer), contentType };
  }
}
