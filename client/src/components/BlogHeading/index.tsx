import { useState } from 'react';
import Button from 'components/Button/Button';

interface BlogHeadingProps {
  onCreateNew: () => void;
  onSearch: (searchTerm: string) => void;
}

const BlogHeading = ({ onCreateNew, onSearch }: BlogHeadingProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="border-b border-gray-200 pb-6 mb-8 mt-16 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Posts
            </h1>
            <p className="text-gray-600">
              Discover insightful articles and creative stories from our
              community
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </div>
            <Button
              variant="primary"
              onClick={onCreateNew}
              className="whitespace-nowrap"
            >
              Create New Post
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeading;
