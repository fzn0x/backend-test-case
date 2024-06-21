import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { MemberService } from '../services/member.service.js';
import { BorrowReturnDto } from '../objects/borrow-return.object.js';

@Controller('api')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('member')
  async get(@Res() res: Response) {
    try {
      const data = await this.memberService.get();

      return res.status(HttpStatus.OK).json({
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

  @Post('member/borrow-book')
  async borrow(@Res() res: Response, @Body() postData: BorrowReturnDto) {
    try {
      const { bookId, memberId } = postData;
      const data = await this.memberService.borrowBook(bookId, memberId);

      return res.status(HttpStatus.OK).json({
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

  @Post('member/return-book')
  async return(@Res() res: Response, @Body() postData: BorrowReturnDto) {
    try {
      const { bookId, memberId } = postData;
      const data = await this.memberService.returnBook(bookId, memberId);

      return res.status(HttpStatus.OK).json({
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
