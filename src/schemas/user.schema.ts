import * as Mongoose from 'mongoose';

export const UserSchema = new Mongoose.Schema(
  {
    username: { type: String, required: true },
    posts: { type: [Mongoose.SchemaTypes.ObjectId], ref: 'Post' },
    favs: { type: [Mongoose.SchemaTypes.ObjectId], ref: 'Post' },
  },
  {
    timestamps: true,
  },
);
