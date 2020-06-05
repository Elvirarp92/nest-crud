import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  //creates Mongoose model for the User
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //fetch a specific user - this will be useful to check favs
  async getUser(userID: string): Promise<User> {
    const user = await this.userModel
      .findById(userID)
      .populate('favs')
      .exec();
    return user;
  }

  //edit an specific user
  async updateUser(
    userID: string,
    createUserDTO: CreateUserDTO,
  ): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }
}
