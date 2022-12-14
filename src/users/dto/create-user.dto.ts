import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'ageRange', async: false })
export class CustomAgeRange implements ValidatorConstraintInterface {
  validate(age: number, args: ValidationArguments) {
    return age >= args.constraints[0] && age <= args.constraints[1];
  }

  defaultMessage(args) {
    return `Age must be between ${args.constraints[0]} and ${args.constraints[1]}`;
  }
}

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'The age of the user',
    minimum: 0,
    default: 10,
    example: 20,
  })
  @Validate(CustomAgeRange, [18, 70])
  age: number;
}
