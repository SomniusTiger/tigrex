import React from 'react';
import Article from '../../../components/shared/Article';

import type { NextPage } from 'next';

import content from '../../../content/test';

const Articles: NextPage = () => (
  <Article content={content}/>
);

export default Articles;
