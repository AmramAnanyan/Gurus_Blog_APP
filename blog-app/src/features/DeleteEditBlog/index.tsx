import BlogHeading from 'components/BlogHeading';
import BlogPost from 'components/BlogPost/BlogPost';
import Button from 'components/Button/Button';
import InputField from 'components/InputField';
import Modal from 'components/Modal';
import { ModalButtons } from 'components/Modal/components';
import React, { useState } from 'react';
import {
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from 'react-hook-form';
type FormValues = {
  title: string;
  description: string;
  image: FileList;
};
const initialPosts = [
  {
    id: '1',
    title: 'Exploring the Universe',
    description:
      'A deep dive into the mysteries of the cosmos, uncovering secrets of galaxies, stars, and black holes.',
    imageUrl: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: '2',
    title: 'The Future of AI',
    description:
      'How artificial intelligence is reshaping industries, from healthcare to finance, and what it means for humanity.',
    imageUrl: 'https://picsum.photos/400/300?random=1',
  },
];

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const DeleteEdit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const handleDelete = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEdit = (
    postId: string,
    updatedPost: { title: string; description: string }
  ) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };
  const handleSearch = (searchTerm: string) => {
    // Implement search logic
    console.log('Searching for:', searchTerm);
  };

  const handleCreateNew = () => {
    setOpenModal(true);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', {
      title: data.title,
      description: data.description,
      file: data.image,
    });
  };
  const handleCancel = () => {
    setOpenModal(false);
    reset();
  };
  return (
    <div className="">
      <BlogHeading onCreateNew={handleCreateNew} onSearch={handleSearch} />
      {openModal && (
        <Modal onClose={handleCancel}>
          <InputField
            label={'Title'}
            name={'title'}
            type={'text'}
            register={register('title', { required: 'Title is required' })}
            error={errors.title?.message}
          />
          <InputField
            label={'Description'}
            name={'description'}
            type="textarea"
            register={register('description', {
              required: 'Description is required',
            })}
            error={errors.description?.message}
          />
          <InputField
            label={'Image'}
            name={'image'}
            type="file"
            register={register('image', {
              required: 'Image is required',
            })}
            error={errors.image?.message}
          />
          <ModalButtons>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              Save
            </Button>
          </ModalButtons>
        </Modal>
      )}
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          {...post}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default DeleteEdit;
