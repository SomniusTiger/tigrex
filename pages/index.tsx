import React from 'react';

import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

import Metatags from '../components/meta/Metatags';

const Home = () => (
  <div>
    <Metatags />

    <section className="hero">
      Hello yes this is cat
    </section>

    <Global styles={css`
      ${emotionReset}
    `} />
  </div>
);

export default Home;
