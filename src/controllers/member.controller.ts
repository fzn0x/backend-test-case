import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { MemberService } from '../services/member.service.js';
import { BorrowReturnDto } from '../objects/borrow-return.object.js';
import { HttpResponse } from '../utils/decorators/response-interceptors.js';

@Controller('api')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('member')
  @HttpResponse()
  async get(@Res() res: Response) {
    return await this.memberService.get();
  }

  @Post('member/borrow-book')
  @HttpResponse()
  async borrow(@Res() res: Response, @Body() postData: BorrowReturnDto) {
    const { bookId, memberId } = postData;
    return await this.memberService.borrowBook(bookId, memberId);
  }

  @Post('member/return-book')
  @HttpResponse()
  async return(@Res() res: Response, @Body() postData: BorrowReturnDto) {
    const { bookId, memberId } = postData;
    return await this.memberService.returnBook(bookId, memberId);
  }
}
