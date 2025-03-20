import { BlogPost } from '../utils/types';
import App from '../app';
import HttpError from '../utils/http-error';
import { HttpMessages, HttpStatus } from '../utils/http-status-messages';

class BlogService {
  public async createPostInDB(blogPost: BlogPost) {
    try {
      const post = await App.prisma.blogPost.create({
        data: blogPost,
      });
      return post;
    } catch (error) {
      throw new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
    }
  }
  public async getAllPostsFromDB() {
    try {
      const posts: BlogPost[] = await App.prisma.blogPost.findMany();
      return posts;
    } catch (error) {
      throw new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
    }
  }
  public async getPostByIDFromDB(postId: number): Promise<BlogPost | null> {
    try {
      const post: BlogPost | null = await App.prisma.blogPost.findUnique({
        where: { id: postId },
      });
      return post;
    } catch (error) {
      throw new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
    }
  }
  public async deletePostByIDFromDB(postId: number): Promise<BlogPost> {
    try {
      const post: BlogPost = await App.prisma.blogPost.delete({
        where: { id: postId },
      });
      return post;
    } catch (error) {
      throw new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
    }
  }
  public async updatePostByIDinDB(postId: number, blogPost: Partial<BlogPost>) {
    try {
      const post = await App.prisma.blogPost.update({
        where: { id: postId },
        data: {
          title: blogPost.title,
          description: blogPost.description,
          image: blogPost.image || undefined,
        },
      });
      return post;
    } catch (error) {
      throw new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
    }
  }
}
export default BlogService;
