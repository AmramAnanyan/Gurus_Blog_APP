import React, { FC, PropsWithChildren } from 'react';

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className="min-h-screen bg-gray-50">{children}</main>;
};

export default PageWrapper;
