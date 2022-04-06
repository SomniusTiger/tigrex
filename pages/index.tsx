/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import Image from 'next/image';
import type { NextPage } from 'next';

import { sizes, colors } from '../components/styles_shared/variables';

import Metatags from '../components/meta/Metatags';
import React from 'react';

const styles = {
  introduction: css`
    padding: ${sizes.unit * 4}px ${sizes.unit}px 0 ${sizes.unit}px;
    text-align: center;
  `,
  aboutText: css`
    font-size: 1.5em;
    line-height: 1.4;
    margin: ${sizes.unit * 3}px auto 0;
    max-width: 600px;
    width: 100%;
  `,
  tigerImageWrapper: css`
    background-color: ${colors.off_white};
    border-radius: 50% 50%;
    height: 40vmin;
    margin: 0 auto;
    position: relative;
    width: 40vmin;
  `,
};

const Home: NextPage = () => (
  <React.Fragment>
    <Metatags />

    <section css={styles.introduction}>
      <div css={styles.tigerImageWrapper}>
        <Image src="/images/somnius.svg" layout="fill" alt="A small white tiger in a fancy outfit" />
      </div>
      <p css={styles.aboutText}>
        Welcome. This is the digital home of Somnius. This is my personal wiki, where I can compile notes about both things I have made and other things I find it useful to share.
      </p>
    </section>
  </React.Fragment>
);

export default Home;
