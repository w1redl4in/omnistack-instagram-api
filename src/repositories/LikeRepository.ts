import Post from '../models/Post';

class LikeRepository {
  public async like(id: string): Promise<any> {
    try {
      const post: any = await Post.findById(id);
      post.likes += 1;
      await post.save();
      return post;
    } catch (err) {
      throw err;
    }
  }

  public async deslike(id: string): Promise<any> {
    try {
      const post: any = await Post.findById(id);
      post.likes >= 1 ? (post.likes -= 1) : post.likes;
      await post.save();
      return post;
    } catch (err) {
      throw err;
    }
  }
}

export default new LikeRepository();
