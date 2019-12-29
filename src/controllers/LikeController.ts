import LikeRepository from '../repositories/LikeRepository';
import { Request, Response } from 'express';

class LikeController {
  public async like(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const postWithLike = await LikeRepository.like(id);
      return res.json(postWithLike);
    } catch (err) {
      return res.send(err);
    }
  }

  public async deslike(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const postWithDeslike = await LikeRepository.deslike(id);
      return res.json(postWithDeslike);
    } catch (err) {
      return res.send(err);
    }
  }
}

export default new LikeController();
