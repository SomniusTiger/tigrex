/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';

import emotionReset from 'emotion-reset';

import { sizes } from '../components/styles_shared/variables';

import Header from '../components/shared/Header';
import Metatags from '../components/meta/Metatags';

const styles = {
  introduction: css`
    padding: ${sizes.unit * 4}px ${sizes.unit}px 0 ${sizes.unit}px;
    text-align: center;
  `,
  aboutText: css`
    margin: ${sizes.unit * 3}px auto 0;
    max-width: 600px;
    width: 100%;
  `,
};

const Home = () => (
  <div>
    <Metatags />
    <Header />
    <div css={css`
      background-color: #333;
    `} />

    <Global styles={css`
      ${emotionReset}
      body {
        background-color: #000;
        color: #aaa;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
    `} />

    <section css={styles.introduction}>
      <img src="/images/somnius.svg" width="100%" alt="A small white tiger in a fancy outfit" />
      <p css={styles.aboutText}>
        Welcome. This is the digital home of Somnius. This is my personal wiki, where I can compile notes about both things I have made and other things I find it useful to share.
      </p>
    </section>
  </div>
);

export default Home;
