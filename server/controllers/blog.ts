import { NextFunction, Request, Response } from 'express';
import { BlogPost } from '../utils/types';
import BlogService from '../services/blog';
import HttpError from '../utils/http-error';
import { HttpMessages, HttpStatus } from '../utils/http-status-messages';
import { validationResult } from 'express-validator';
import fs from 'fs';

class BlogController {
  blogService: BlogService;
  constructor() {
    this.blogService = new BlogService();
  }
  getAllPosts = async (req: Request, res: Response): Promise<void> => {
    try {
      const allPosts: BlogPost[] = await this.blogService.getAllPostsFromDB();
      if (!allPosts.length) {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: HttpMessages[HttpStatus.NOT_FOUND] });
        return;
      }
      res.json(allPosts);
    } catch (err) {
      const error = new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  };
  getPostById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: HttpMessages[HttpStatus.BAD_REQUEST] });
      return;
    }
    try {
      const post = await this.blogService.getPostByIDFromDB(id);
      if (!post) {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: HttpMessages[HttpStatus.NOT_FOUND] });
        return;
      }
      res.json(post);
    } catch (err) {
      const error = new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  };
  editPostById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const errors = validationResult(req);
    if (isNaN(id) || !errors.isEmpty()) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: HttpMessages[HttpStatus.BAD_REQUEST] });
      return;
    }
    try {
      const post = await this.blogService.getPostByIDFromDB(id);
      if (!post) {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: HttpMessages[HttpStatus.NOT_FOUND] });
        return;
      }
      const updatedPost = await this.blogService.updatePostByIDinDB(id, {
        title: req.body.title,
        description: req.body.description,
      });
      res.json({ message: 'Post updated successfully', post: updatedPost });
    } catch (err) {
      const error = new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  };
  createPost = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          console.error(err);
        });
      }
      res.status(HttpStatus.BAD_REQUEST).json(errors);

      return;
    }
    const post: BlogPost = {
      title: req.body.title,
      description: req.body.description,
      image: req.file?.path || 'not_image',
    };
    try {
      const createdPost = await this.blogService.createPostInDB(post);
      res.json({ message: 'Post created successfully', post: createdPost });
    } catch (err) {
      const error = new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  };
  deletePostById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: HttpMessages[HttpStatus.BAD_REQUEST] });
      return;
    }
    try {
      const post = await this.blogService.getPostByIDFromDB(id);
      if (!post) {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: HttpMessages[HttpStatus.NOT_FOUND] });
        return;
      } else {
        const deletedPost = await this.blogService.deletePostByIDFromDB(id);
        if (deletedPost.image) {
          fs.unlink(deletedPost.image, (err) => {
            console.error(err);
          });
        }
        res.json({ message: 'Post Deleted successfully', post: deletedPost });
      }
    } catch (err) {
      const error = new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}

export default new BlogController();
