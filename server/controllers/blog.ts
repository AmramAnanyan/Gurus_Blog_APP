import { Request, Response } from 'express';

class BlogController {
  getAllPosts = (req: Request, res: Response) => {
    res.send('Thanks');
  };
  getPostById = (req: Request, res: Response) => {};
  editPostById = (req: Request, res: Response) => {};
  createPost = (req: Request, res: Response) => {};
  deletePostById = (req: Request, res: Response) => {};
}

export default new BlogController();
