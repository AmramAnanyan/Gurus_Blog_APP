import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_API_URL } from 'utils/constants/generic';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostDetails: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="mt-16">
      <article className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Posts
          </Link>
        </div>
        <div className="mb-8 rounded-lg shadow-lg overflow-hidden">
          <img
            src={`${BASE_API_URL}/${post.image}`}
            alt={post.title}
            className="w-full h-64 object-cover md:h-96"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetails;
