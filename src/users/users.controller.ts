import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiCreatedResponse({ type: [UserEntity] })
  findAll() {
    return this.usersService.users({ orderBy: { email: 'desc' } });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiCreatedResponse({ type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.user({ id: id });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by id' })
  @ApiCreatedResponse({ type: UserEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser({
      where: { id: id },
      data: updateUserDto,
    });
  }
}
