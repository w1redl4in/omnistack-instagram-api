import Post from '../models/Post';
import LikeService from '../services/LikeService';

class LikeRepository {
  public async like(id: string): Promise<string> {
    try {
      const post = await LikeService.like(id);
      return post;
    } catch (err) {
      throw err;
    }
  }

  public async deslike(id: string): Promise<string> {
    try {
      const post = await LikeService.deslike(id);
      return post;
    } catch (err) {
      throw err;
    }
  }
}

export default new LikeRepository();
