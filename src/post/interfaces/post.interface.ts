import { Document } from 'mongoose';

export interface Post extends Document {
  readonly text: string,
}