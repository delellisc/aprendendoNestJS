import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'roda de oraçao contra o criciuma hoje meia noite';
  }
}
