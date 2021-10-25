/** @jsxRuntime classic */
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import type { NextPage } from 'next'

import { sizes, colors } from '../components/styles_shared/variables';

import Header from '../components/shared/Header';
import Metatags from '../components/meta/Metatags';

const styles = {
  background: css`
    background-color: ${colors.grey_med_dark};
    min-height: 100vh;
  `,
  introduction: css`
    padding: ${sizes.unit * 4}px ${sizes.unit}px 0 ${sizes.unit}px;
    text-align: center;
  `,
  aboutText: css`
    font-size: 1.5em;
    line-height: 1.3;
    margin: ${sizes.unit * 3}px auto 0;
    max-width: 600px;
    width: 100%;
  `,
  tigerImage: css`
    max-width: 600px;
    width: 100%;
  `,
};

const Home: NextPage = () => {
  return (
    <div css={styles.background}>
      <Global styles={css`
        ${emotionReset}

        html {
          font-size: ${sizes.unit}px;
          line-height: 2;
        }

        body {
          background-color: #000;
          color: #aaa;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
      `} />
      <Metatags />
      <Header />

      <section css={styles.introduction}>
        <img css={styles.tigerImage} src="/images/somnius.svg" width="100%" alt="A small white tiger in a fancy outfit" />
        <p css={styles.aboutText}>
          Welcome. This is the digital home of Somnius. This is my personal wiki, where I can compile notes about both things I have made and other things I find it useful to share.
        </p>
      </section>
    </div>
  )
}

export default Home
