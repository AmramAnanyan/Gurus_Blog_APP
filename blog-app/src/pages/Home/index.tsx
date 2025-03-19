import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import DeleteEdit from 'features/DeleteEditBlog';

const HomePage = () => {
  return (
    <PageWrapper>
      <DeleteEdit />
    </PageWrapper>
  );
};

export default HomePage;
