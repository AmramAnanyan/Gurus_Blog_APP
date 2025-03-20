import React from 'react';
interface EmptyStateCardProps {
  onCreatePost?: () => void;
  message?: string;
  buttonText?: string;
}

const EmptyStateCard: React.FC<EmptyStateCardProps> = ({
  buttonText = 'Create First Post',
  onCreatePost,
}) => {
  return (
    <div
      className=" flex items-start justify-center cursor-pointer"
      onClick={onCreatePost}
    >
      <div className="max-w-md p-8 text-center">
        <div className="mb-6 text-gray-400 ">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-500 mb-4">{buttonText}</h2>
      </div>
    </div>
  );
};

export default EmptyStateCard;
