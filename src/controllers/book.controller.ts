import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BookService } from '../services/book.service.js';
import { Response } from 'express';
import { HttpResponse } from '../utils/decorators/response-interceptors.js';

@Controller('api')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('book')
  @HttpResponse()
  async get(@Res() res: Response) {
    return await this.bookService.get();
  }
}
