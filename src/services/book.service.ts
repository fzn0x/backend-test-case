import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { Book } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<Book[]> {
    // Shows all existing books and quantities
    // Books that are being borrowed are not counted (stock: 0)
    const books = await this.prisma.book.findMany({
      where: {
        stock: {
          gt: 0,
        },
      },
    });
    return books;
  }
}
