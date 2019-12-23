import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import emotionReset from 'emotion-reset';

import { sizes } from '../components/styles_shared/variables';

import Header from '../components/shared/Header';
import Metatags from '../components/meta/Metatags';

import Sigil from '../components/svg/Sigil';

const Introduction = styled('section')`
  padding: ${sizes.unit * 4}px ${sizes.unit}px 0 ${sizes.unit}px;
  text-align: center;
`;

const Home = () => (
  <div>
    <Metatags />
    <Header />

    <Introduction>
      <Sigil/>
    </Introduction>

    <Global styles={css`
      ${emotionReset}
      body {
        background-color: #000;
        color: #aaa;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
    `} />
  </div>
);

export default Home;
