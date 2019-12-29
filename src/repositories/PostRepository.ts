import Post, { IPost } from '../models/Post';
import PostService from '../services/PostService';

class postRepository {
  public async store(post: IPost, foto: any): Promise<any> {
    try {
      const newPost = await PostService.createPost(post, foto);
      return newPost;
    } catch (err) {
      throw err;
    }
  }

  public async index(): Promise<any> {
    try {
      const list = PostService.getAll();
      return list;
    } catch (err) {
      throw err;
    }
  }

  public async show(id: string): Promise<any> {
    try {
      const post = PostService.getOne(id);
      return post;
    } catch (err) {
      throw err;
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      await PostService.delete(id);
      return true;
    } catch (err) {
      throw err;
    }
  }

  public async update(id: string, post: IPost): Promise<any> {
    try {
      const updatedPost = await PostService.update(id, post);
      return updatedPost;
    } catch (err) {
      throw err;
    }
  }
}

export default new postRepository();
