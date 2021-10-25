import React from 'react';
import { useRouter } from 'next/router';

const Articles = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h1>{slug}</h1>
    </>
  );
};

export default Articles;
