import { Document } from 'mongoose';

export interface Post extends Document {
  readonly author: string,
  readonly text: string,
}