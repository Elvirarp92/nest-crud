import * as Mongoose from 'mongoose';

export const UserSchema = new Mongoose.Schema(
  {
    username: String,
    posts: { type: [Mongoose.SchemaTypes.ObjectId], ref: 'Post' },
    favs: { type: [Mongoose.SchemaTypes.ObjectId], ref: 'Post' },
  },
  {
    timestamps: true,
  },
);
