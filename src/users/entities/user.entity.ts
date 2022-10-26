import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiPropertyOptional()
  name: string;
  @ApiPropertyOptional()
  age: number;
}
