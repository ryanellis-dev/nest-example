import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; name: string } {
    return { message: 'Hello World!', name: 'NestJS' };
  }
}
