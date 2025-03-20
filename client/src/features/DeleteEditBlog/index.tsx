import BlogHeading from 'components/BlogHeading';
import BlogPost from 'components/BlogPost/BlogPost';
import Button from 'components/Button/Button';
import InputField from 'components/InputField';
import Modal from 'components/Modal';
import { ModalButtons } from 'components/Modal/components';
import { isLoadingPost, selectAllPost } from 'entities/blog/model';
import React, { useEffect, useState } from 'react';
import {
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { useAppDispatch } from 'utils/hooks/useAppDispatch';
import { useAppSelector } from 'utils/hooks/useAppSelector';
import { createPost, deletePost, fetchPosts, updatePost } from './thunks';
import { IBlogPost } from 'utils/constants/types';
import { toast } from 'react-toastify';
import Spinner from 'components/Loader/Spinner';
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

const DeleteEdit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();
  const [openModal, setOpenModal] = useState(false);

  const posts: IBlogPost[] = useAppSelector(selectAllPost);
  const isLoading = useAppSelector(isLoadingPost);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const handleDelete = async (postId: number) => {
    const data: any = await dispatch(deletePost(postId)).unwrap();
    if (data && data?.message) {
      toast.success(data.message, { position: 'bottom-right' });
    }
  };

  const handleEdit = async (
    postId: number,
    updatedBlog: { title: string; description: string }
  ) => {
    try {
      const response: Record<string, any> = await dispatch(
        updatePost({ id: postId, ...updatedBlog })
      ).unwrap();
      if (response && response.message) {
        toast.success(response.message, { position: 'bottom-right' });
      }
    } catch (err: any) {
      toast.error(err.message, { position: 'bottom-right' });
    }
  };
  const handleSearch = (searchTerm: string) => {
    // Implement search logic
    console.log('Searching for:', searchTerm);
  };

  const handleCreateNew = () => {
    setOpenModal(true);
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response: Record<string, any> = await dispatch(
        //@ts-ignore
        createPost({
          title: data.title,
          description: data.description,
          image: data.image[0],
        })
      ).unwrap();
      if (response && response?.message) {
        toast.success(response.message, { position: 'bottom-right' });
        setOpenModal(false);
        reset();
      }
    } catch (err: any) {
      toast.error(err.message, { position: 'bottom-right' });
    }
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
      {isLoading && (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center">
          <Spinner />
        </div>
      )}
      {posts?.map((post: IBlogPost) => (
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
