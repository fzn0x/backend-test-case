import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BookService } from '../services/book.service.js';
import { Response } from 'express';

@Controller('api')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('book')
  async get(@Res() res: Response) {
    try {
      const data = await this.bookService.get();

      res.status(HttpStatus.OK).json({
        data,
        status: HttpStatus.OK,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        data: err.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
