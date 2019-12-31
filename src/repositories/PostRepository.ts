import Post, { IPost } from '../models/Post';

class postRepository {
  public async store(post: IPost, foto: any): Promise<any> {
    try {
      const newPost = await Post.create({ post, foto });
      return newPost;
    } catch (err) {
      throw err;
    }
  }

  public async index(): Promise<any> {
    try {
      const posts = await Post.find();
      return posts;
    } catch (err) {
      throw err;
    }
  }

  public async show(id: string): Promise<any> {
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

export default new postRepository();
