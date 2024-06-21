import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { Member } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<Member[]> {
    const members = await this.prisma.member.findMany({
      include: {
        borrowers: {
          select: {
            _count: true, // The number of books being borrowed by each member
          },
        },
      },
    });
    return members;
  }

  async borrowBook(bookId: number, memberId: number) {
    const book = await this.prisma.book.findFirst({
      where: {
        id: bookId,
      },
      include: {
        borrowers: true,
      },
    });

    if (!book) {
      throw new Error('Book not found');
    }

    if (!book.stock) {
      throw new Error('Book is not available');
    }

    if (book.borrowers.length) {
      throw new Error('Book are borrowed!'); // Borrowed books are not borrowed by other members
    }

    const member = await this.prisma.member.findFirst({
      where: {
        id: memberId,
      },
      include: {
        borrowers: true,
      },
    });

    if (!member) {
      throw new Error('Member not found');
    }

    if (member.borrowers.length >= 2) {
      throw new Error('Members can not borrow more than 2 books!');
    }

    if (member.penalizedAt) {
      // only use logic if penalizedAt is not null
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

      if (member.penalizedAt > threeDaysAgo) {
        throw new Error(
          'Member is penalized and cannot borrow books for 3 days!',
        );
      }
    }

    const borrowed = await this.prisma.borrowedBook.create({
      data: {
        book: {
          connect: {
            id: bookId,
          },
        },
        member: {
          connect: {
            id: memberId,
          },
        },
      },
    });

    return borrowed;
  }

  async returnBook(bookId: number, memberId: number) {
    const borrowed = await this.prisma.borrowedBook.findFirst({
      where: {
        book: {
          some: {
            id: bookId,
          },
        },
        member: {
          some: {
            id: memberId,
          },
        },
      },
    });

    if (!borrowed) {
      throw new Error('Borrower and borowwed book not found!');
    }

    // keep use logic since borrowedAt is inserted by default
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    if (borrowed.borrowedAt < sevenDaysAgo) {
      await this.prisma.member.update({
        where: {
          id: memberId,
        },
        data: {
          penalizedAt: new Date(),
        },
      });
    }

    // returned
    const returned = await this.prisma.borrowedBook.deleteMany({
      where: {
        member: {
          some: {
            id: memberId,
          },
        },
        book: {
          some: {
            id: bookId,
          },
        },
      },
    });

    return returned;
  }
}
