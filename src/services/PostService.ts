import Post, { IPost } from '../models/Post';
import { soquete } from '../index';
import Path from 'path';
import Sharp from 'sharp';
import FS from 'fs';

class PostService {
  public async createPost(post: IPost, foto: any): Promise<{}> {
    try {
      const { author, place, description, hashtags } = post;
      const { filename: image } = foto;

      await Sharp(foto.path)
        .resize(500)
        .jpeg({ quality: 100 })
        .toFile(Path.resolve(foto.destination, 'resized', image));

      FS.unlinkSync(foto.path);

      const newPost = await Post.create({
        author,
        place,
        description,
        hashtags,
        image,
      });
      soquete.emit('newpost', newPost);
      return newPost;
    } catch (err) {
      throw err;
    }
  }

  public async getAll(): Promise<any> {
    try {
      const posts = await Post.find().sort('-createdAt');
      return posts;
    } catch (err) {
      throw err;
    }
  }

  public async getOne(id: string): Promise<any> {
    try {
      const post = await Post.findById(id);
      return post;
    } catch (err) {
      throw err;
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      await Post.findByIdAndDelete(id);
      return true;
    } catch (err) {
      throw err;
    }
  }

  public async update(id: string, post: IPost): Promise<any> {
    try {
      const updatedPost = await Post.findByIdAndUpdate(id, post);
      return updatedPost;
    } catch (err) {
      throw err;
    }
  }
}

export default new PostService();
