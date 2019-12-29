import { Request, Response } from 'express';
import PostRepository from '../repositories/PostRepository';

class PostController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const post = await PostRepository.store(req.body, req.file);
      return res.json(post);
    } catch (err) {
      return res.send(err);
    }
  }

  async index(_: Request, res: Response): Promise<Response> {
    try {
      const list = await PostRepository.index();
      return res.json(list);
    } catch (err) {
      return res.send(err);
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const post = await PostRepository.show(id);
      return res.json(post);
    } catch (err) {
      return res.send(err);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await PostRepository.delete(id);
      return res.status(204).json(true);
    } catch (err) {
      return res.send(err);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const newPost = req.body;
      await PostRepository.update(id, newPost);
      return res.json(newPost);
    } catch (err) {
      return res.send(err);
    }
  }
}
export default new PostController();
