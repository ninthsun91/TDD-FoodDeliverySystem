import {
  Controller,
  Res,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { TypedBody, TypedRoute } from '@nestia/core';
import { Response } from 'express';
import { is } from 'typia';

import { IgnoreAuth } from 'src/auth/decorators';
import { JwtAuthService } from 'src/auth/services';
import { ResponseForm, createResponse } from 'src/utils/createResponse';

import { UserCreateDto } from './dto';
import { UserSignDto } from './dto/user-sign.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwt: JwtAuthService,
  ) {}

  @IgnoreAuth()
  @TypedRoute.Post('/signup')
  async signup(
    @TypedBody() form: UserCreateDto,
  ): Promise<ResponseForm<User>> {
    const user = await this.usersService.findUserByEmail({ email: form.email });
    if (is<User>(user)) {
      throw new BadRequestException();
    }

    const createdUser = await this.usersService.createUser(form);

    return createResponse<User>(createdUser);
  }

  @IgnoreAuth()
  @TypedRoute.Post('/signin')
  async signin(
    @TypedBody() form: UserSignDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<ResponseForm<User>> {
    const user = await this.usersService.findUserByEmailAndPassword(form);
    if (!is<User>(user)) {
      throw new BadRequestException();
    }

    const accessToken = await this.jwt.createAccessToken(user);
    if (accessToken === null) {
      throw new InternalServerErrorException();
    }

    res.cookie('accessToken', accessToken, { maxAge: 1000 * 60 * 60 });

    return createResponse<User>(user);
  }
}
