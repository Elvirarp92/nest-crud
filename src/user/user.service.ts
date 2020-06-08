import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';

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

  //Adding favs
  async updateUser(userID: string, favID: string): Promise<User> {
    const user = await this.userModel.findById(userID);
    const userData = user.toJSON();
    userData.favs.push(favID);
    this.userModel.findByIdAndUpdate(userID, { $set: userData });
  }
}
