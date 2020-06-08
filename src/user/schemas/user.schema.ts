import * as Mongoose from 'mongoose';

export const UserSchema = new Mongoose.Schema(
  {
    username: { type: String, required: true },
    favs: { type: [Mongoose.SchemaTypes.ObjectId], ref: 'Post' },
  },
  {
    timestamps: true,
  },
);
