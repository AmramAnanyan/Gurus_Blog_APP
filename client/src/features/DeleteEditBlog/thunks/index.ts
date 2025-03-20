import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_API_URL } from 'utils/constants/generic';
import { IBlogPost } from 'utils/constants/types';

export const fetchPosts = createAsyncThunk<IBlogPost[], void>(
  'blogPosts/fetchPosts',
  async () => {
    const response = await fetch('http://localhost:8080/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  }
);

export const fetchPostById = createAsyncThunk<IBlogPost, number>(
  'blogPosts/fetchPostById',
  async (id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch the post');
    }
    return response.json();
  }
);

export const createPost = createAsyncThunk<IBlogPost, IBlogPost>(
  'blogPosts/createPost',
  async (newPost) => {
    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('description', newPost.description);
    if (newPost.image) formData.append('image', newPost.image);
    const response = await fetch(`${BASE_API_URL}/posts`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return response.json();
  }
);

export const updatePost = createAsyncThunk<Omit<IBlogPost, 'image'>, IBlogPost>(
  'blogPosts/updatePost',
  async (updatedPost) => {
    const response = await fetch(
      `http://localhost:8080/posts/${updatedPost.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    return response.json();
  }
);

export const deletePost = createAsyncThunk<number, number>(
  'blogPosts/deletePost',
  async (id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return response.json();
  }
);
export const searchPost = createAsyncThunk<string, string>(
  'blogPosts/searchPost',
  async (searchTerm) => {
    const response = await fetch(
      `${BASE_API_URL}/posts/search?term=${searchTerm}`,
      {
        method: 'GET',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return response.json();
  }
);
