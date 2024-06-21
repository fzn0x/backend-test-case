import { ApiProperty } from '@nestjs/swagger';

export class BorrowReturnDto {
  @ApiProperty()
  bookId: number;

  @ApiProperty()
  memberId: number;
}
