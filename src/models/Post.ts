import mongoose from 'mongoose';

export interface IPost {
  author: String;
  place?: String;
  description?: String;
  hashtags?: String;
  image?: String;
  likes?: Number;
}

const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', PostSchema);
