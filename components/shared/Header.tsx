/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { colors, sizes } from '../styles_shared/variables';

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
  `,
  homeLink: css`
  color: ${colors.white};
  text-decoration: none;
`,
};

const Header = () => (
  <section className="rc-Header" css={styles.headerWrapper}>
    <h2 css={styles.headerText}>
      <a css={styles.homeLink} href="/">Somnius</a>
    </h2>
  </section>
);

export default Header;
