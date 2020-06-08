import * as Mongoose from 'mongoose';

export const PostSchema = new Mongoose.Schema(
  {
    author: { type: Mongoose.SchemaTypes.ObjectId, ref: 'user', required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
