import React from 'react';

import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

import Header from '../components/shared/Header';
import Metatags from '../components/meta/Metatags';

const Home = () => (
  <div>
    <Metatags />
    <Header />

    <section className="hero">
      Hello yes this is cat
    </section>

    <Global styles={css`
      ${emotionReset}
    `} />
  </div>
);

export default Home;
