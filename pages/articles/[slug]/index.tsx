import React from 'react';
import { useRouter } from 'next/router';
import Metatags from '../../../components/meta/Metatags';

import type { NextPage } from 'next';


const Articles: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <React.Fragment>
      <Metatags />
      <h1>{slug}</h1>
    </React.Fragment>
  );
};

export default Articles;
