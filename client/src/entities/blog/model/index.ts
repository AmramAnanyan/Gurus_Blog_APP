import { createSlice } from '@reduxjs/toolkit';
import {
  createPost,
  deletePost,
  fetchPostById,
  fetchPosts,
  updatePost,
} from 'features/DeleteEditBlog/thunks';
import { IBlogPost } from 'utils/constants/types';
interface BlogPostState {
  posts: IBlogPost[];
  selectedPost: IBlogPost | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogPostState = {
  posts: [],
  selectedPost: null,
  loading: false,
  error: null,
};

const blogPostSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch the post';
      });
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        //@ts-ignore
        state.posts.push(action.payload?.post);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create post';
      });
    builder
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action: any) => {
        state.loading = false;
        const index = state.posts.findIndex(
          (post) => post.id === action.payload?.post?.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload?.post;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update post';
      });
    builder
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action: any) => {
        state.loading = false;
        state.posts = state.posts.filter(
          (post) => post.id !== action.payload?.post.id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete post';
      });
  },
});

export const selectAllPost = (state: any) => state.blogPost.posts;
export const isLoadingPost = (state: any) => state.blogPost.loading;
export const selectPostById = (id: number, state: any) => {
  console.log(id, state.blogPost, '=====>>>');
  return state.blogPost.posts.find((item: any) => {
    return id === item.id;
  });
};
export default blogPostSlice.reducer;
