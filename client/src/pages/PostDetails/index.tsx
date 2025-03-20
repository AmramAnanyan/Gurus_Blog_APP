import BlogPostDetails from 'components/BlogPostDetails';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import { selectPostById } from 'entities/blog/model';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks/useAppSelector';

const PostDetails = () => {
  const params: any = useParams();
  const intId = Number(params['*']);
  const post = useAppSelector((state) => selectPostById(intId, state));
  console.log(post, 'post ===>>');
  return (
    <PageWrapper>
      <BlogPostDetails post={post} />
    </PageWrapper>
  );
};

export default PostDetails;
