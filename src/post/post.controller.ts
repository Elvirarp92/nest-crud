import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('posts')
  async getAllPosts(@Res() res) {
    const allPosts = await this.postService.getAllPosts();
    return res.status(HttpStatus.OK).json(allPosts);
  }

  @Get('post/:postID')
  async getPost(@Res() res, @Param('postID') postID) {
    const post = await this.postService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json(post);
  }
}
