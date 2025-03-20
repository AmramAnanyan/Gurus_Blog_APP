import { configureStore } from '@reduxjs/toolkit';
import blogPostSlice from 'entities/blog/model';
export const store = configureStore({
  reducer: {
    blogPost: blogPostSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
