import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Body,
  Post,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { User } from './../decorators/user.decorator';
import { PostService } from './post.service';
import { Response } from 'express';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('posts')
  async getAllPosts(@Res() res: Response) {
    const allPosts = await this.postService.getAllPosts();
    return res.status(HttpStatus.OK).json(allPosts);
  }

  @Get('post/:postID')
  async getPost(@Res() res: Response, @Param('postID') postID) {
    const post = await this.postService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json(post);
  }

  @Post('newpost')
  async createPost(
    @Res() res: Response,
    @User() user,
    @Body() body,
  ) {
    const newPost = await this.postService.createPost(user, body.text);
    return res.status(HttpStatus.OK).json({
      message: 'Post created successfully!',
    });
  }
}
