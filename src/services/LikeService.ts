import Post from '../models/Post';
import { soquete } from '..';

class LikeService {
  public async like(id: string): Promise<string> {
    try {
      let post: any = await Post.findById(id);
      post.likes += 1;
      await post.save();
      soquete.emit('post', post);
      return post;
    } catch (err) {
      throw err;
    }
  }

  public async deslike(id: string): Promise<string> {
    try {
      let post: any = await Post.findById(id);
      post.likes >= 1 ? (post.likes -= 1) : (post.likes -= 0);
      await post.save();
      soquete.emit('post', post);
      return post;
    } catch (err) {
      throw err;
    }
  }
}

export default new LikeService();
