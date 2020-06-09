import {
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  Put,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { User } from './../decorators/user.decorator';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //fetch an user
  @Get('userfavs/:userID')
  async getCustomer(@Res() res: Response, @Param('userID') userID: string) {
    const user = await this.userService.getUser(userID);

    if (!user) throw new NotFoundException('This user does not exist!');

    return res.status(HttpStatus.OK).json({
      username: user.username,

      favs: user.favs,
    });
  }

  @Put('addfav/:favID')
  async addFav(
    @Req() req: Request,
    @Res() res: Response,
    @User() user,
    @Param('favID') favID: string,
  ) {
    const fetchedUser = await this.userService.addFav(user.id, req.params.favID);
    if (!fetchedUser) throw new NotFoundException('This user does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Fav added successfully!',
    });
  }
}
