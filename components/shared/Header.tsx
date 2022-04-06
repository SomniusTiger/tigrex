/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';

import { jsx, css } from '@emotion/react';
import { colors, sizes } from 'components/styles_shared/variables';

const styles = {
  headerWrapper: css`
    align-items: center;
    background-color: ${colors.grey_dark};
    display: flex;
    height: ${sizes.unit * 3}px;
    padding: ${sizes.unit}px;
  `,
  headerText: css`
    font-size: 2em;
    font-weight: bold;
    margin-left: ${sizes.unit}px;

    a {
      color: ${colors.white};
      text-decoration: none;
    }
  `,
};

const Header = () => (
  <section className="rc-Header" css={styles.headerWrapper}>
    <div css={styles.headerText}>
      <Link passHref={true} href="/">Somnius</Link>
    </div>
  </section>
);

export default Header;
