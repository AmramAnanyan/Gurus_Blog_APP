import { useState } from 'react';
import Button from '../Button/Button';

interface BlogPostProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    updatedPost: { title: string; description: string }
  ) => void;
}

const BlogPost = ({
  id,
  title,
  description,
  imageUrl,
  onDelete,
  onEdit,
}: BlogPostProps) => {
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
            src={imageUrl}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
