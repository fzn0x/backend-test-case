// https://github.com/prisma/studio/issues/614#issuecomment-795213237
Object.defineProperty(BigInt.prototype, 'toJSON', {
  get() {
    'use strict';
    return () => String(this);
  },
});

import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller.js';
import { MemberController } from './controllers/member.controller.js';
import { BookController } from './controllers/book.controller.js';

import { AppService } from './services/app.service.js';
import { MemberService } from './services/member.service.js';
import { BookService } from './services/book.service.js';
import { PrismaService } from './services/prisma.service.js';

@Module({
  imports: [],
  controllers: [AppController, MemberController, BookController],
  providers: [AppService, PrismaService, MemberService, BookService],
})
export class AppModule {}
