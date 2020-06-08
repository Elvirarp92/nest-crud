import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  //fetch all posts
  async getAllPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  //fetch a specific post
  async getPost(postID: string): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();
    return post;
  }

  async createPost(author: string, text: string): Promise<Post> {
    const newPost = await this.postModel.create({ author, text });
    return newPost.save();
  }
}
