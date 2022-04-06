/** @jsxRuntime classic */
/** @jsx jsx */

import type { AppProps } from 'next/app';

import { Global, jsx, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import Header from 'components/shared/Header';

import { sizes, colors } from 'components/styles_shared/variables';

const styles = {
  background: css`
    background-color: ${colors.grey_darker};
    min-height: 100vh;
  `,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div css={styles.background}>
    <Global styles={css`
      ${emotionReset}

      * {
        box-sizing: border-box;
      }

      html {
        font-size: ${sizes.unit}px;
        line-height: 2;
      }

      body {
        background-color: #000;
        color: #ccc;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
    `} />
    <Header />
    <Component {...pageProps} />
  </div>
  );
}
export default MyApp
