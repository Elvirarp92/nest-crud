import * as Mongoose from 'mongoose';

export const PostSchema = new Mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
