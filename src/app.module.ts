import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
