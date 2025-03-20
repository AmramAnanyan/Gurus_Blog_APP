import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { BASE_API_URL } from 'utils/constants/generic';
import { useNavigate } from 'react-router-dom';

interface BlogPostProps {
  id: number;
  title: string;
  description: string;
  image?: string | File;
  onDelete: (id: number) => Promise<void>;
  onEdit: (
    id: number,
    updatedPost: { title: string; description: string }
  ) => void;
}

const BlogPost = ({
  id,
  title,
  description,
  image,
  onDelete,
  onEdit,
}: BlogPostProps) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    onEdit(id, { title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={`${BASE_API_URL}/${image}`}
            alt="Blog post cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-between w-full">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="mb-2 p-2 border rounded"
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="mb-4 p-2 border rounded h-32"
              />
            </>
          ) : (
            <>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h2>
                <p className="text-gray-600">{description}</p>
              </div>
            </>
          )}

          <div className="mt-4 flex justify-end space-x-2">
            {isEditing ? (
              <Button onClick={handleSave} variant="success">
                Save
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="primary">
                Edit
              </Button>
            )}
            <Button onClick={() => onDelete(id)} variant="danger">
              Delete
            </Button>
            <Button
              onClick={() => {
                navigate(`/post-details/${id}`);
              }}
              variant="secondary"
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
