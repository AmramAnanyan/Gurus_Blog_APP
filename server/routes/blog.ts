import { Router } from 'express';
import App from '../app';
import BlogController from '../controllers/blog';
import fileUpload from '../middlewares/filoe-upload';
import { POST_FIELDS_VALIDATORS } from '../middlewares/blog-validators';

class BlogRoutes {
  router: Router;
  constructor() {
    this.router = Router();
  }
  private getAllPosts() {
    this.router.get('/posts', BlogController.getAllPosts);
    /**
     * @swagger
     * /posts:
     *   get:
     *     summary: Get all posts
     *     description: Retrieve a list of blog posts
     *     responses:
     *       200:
     *         description: A list of blog posts
     */
  }
  private createPosts() {
    this.router.post(
      '/posts',
      fileUpload.single('image'),
      ...POST_FIELDS_VALIDATORS,
      BlogController.createPost
    );
    /**
     * @swagger
     * /posts:
     *   post:
     *     summary: Create a new post
     *     description: Adds a new blog post with a title, description, and image.
     *     consumes:
     *         - multipart/form-data
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             required:
     *               - title
     *               - description
     *               - image
     *             properties:
     *               title:
     *                 type: string
     *                 description: The title of the post
     *               description:
     *                 type: string
     *                 description: The description of the post
     *               image:
     *                 type: string
     *                 description: URL of the post image
     *     responses:
     *       201:
     *         description: Post created successfully
     *       400:
     *         description: Invalid request body
     */
  }
  private getPostById() {
    this.router.get('/posts/:id', BlogController.getPostById);
    /**
     * @swagger
     * /posts/{id}:
     *   get:
     *     summary: Get a post by ID
     *     description: Retrieves a blog post using its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The ID of the post to retrieve
     *     responses:
     *       200:
     *         description: Post found successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                 title:
     *                   type: string
     *                 description:
     *                   type: string
     *                 image:
     *                   type: string
     *       400:
     *         description: Invalid ID supplied
     *       404:
     *         description: Post not found
     */
  }
  private editPostById() {
    this.router.put(
      '/posts/:id',
      fileUpload.single('image'),
      ...POST_FIELDS_VALIDATORS,
      BlogController.editPostById
    );
    /**
     * @swagger
     * /posts/{id}:
     *   put:
     *     summary: Update a post by ID
     *     description: Updates an existing blog post based on the given ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The ID of the post to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *                 description: The new title of the post
     *               description:
     *                 type: string
     *                 description: The new description of the post
     *               image:
     *                 type: string
     *                 description: The new image URL of the post
     *     responses:
     *       200:
     *         description: Post updated successfully
     *       400:
     *         description: Invalid request body or ID
     *       404:
     *         description: Post not found
     */
  }
  private deletePostById() {
    this.router.delete('/posts/:id', BlogController.deletePostById);
    /**
     * @swagger
     * /posts/{id}:
     *   delete:
     *     summary: Delete a post by ID
     *     description: Deletes a blog post based on the provided ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The ID of the post to delete
     *     responses:
     *       200:
     *         description: Post deleted successfully
     *       400:
     *         description: Invalid ID supplied
     *       404:
     *         description: Post not found
     */
  }
  public routers = () => {
    this.getAllPosts();
    this.createPosts();
    this.getPostById();
    this.editPostById();
    this.deletePostById();
    return this.router;
  };
}

export default new BlogRoutes();
