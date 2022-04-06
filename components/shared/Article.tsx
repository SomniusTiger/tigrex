/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Metatags from 'components/meta/Metatags';

import { jsx, css } from '@emotion/react';
import { sizes, colors } from 'components/styles_shared/variables';

const styles = {
  articleWrapper: css`
    width: 100%;
  `,
  articleStyles: css`
    line-height: 1.4;
    margin: ${sizes.unit * 2}px auto 0;
    max-width: ${sizes.body}px;
    padding: 0 ${sizes.unit * 2}px ${sizes.unit * 4}px;
    width: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: ${sizes.unit}px;
      margin-top: ${sizes.unit * 1.5}px;
    }

    h1 {
      font-size: 4em;
      font-weight: bold;
    }

    h2 {
      font-size: 3em;
      font-weight: bold;
    }

    h3 {
      font-size: 2.5em;
      font-weight: bold;
    }

    h4 {
      font-size: 2.25em;
      font-style: italic;
      font-weight: normal;
    }

    h5 {
      font-size: 2em;
      font-style: italic;
      font-weight: normal;
    }

    h6 {
      font-size: 1.5em;
      font-style: italic;
      font-weight: normal;
    }

    @media screen and (max-width: 600px) {
      h1 {
        font-size: 3em;
      }

      h2 {
        font-size: 2.5em;
      }

      h3 {
        font-size: 2.25em;
      }

      h4 {
        font-size: 2em;
      }

      h5 {
        font-size: 1.75em;
      }
    }

    p, ol, ul, table {
      font-size: 1.5em;
    }

    input[type="checkbox"] {
      height: 1.5em;
      width: 1.5em;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: bold;
    }

    blockquote {
      border-bottom: solid 1px ${colors.grey_med_dark};
      border-left: solid 6px ${colors.grey_bright};
      border-right: solid 1px ${colors.grey_med_dark};
      border-top: solid 1px ${colors.grey_med_dark};

      margin: ${sizes.unit}px 0 ${sizes.unit}px;
      max-width: 100%;
      padding: ${sizes.unit * 0.5}px ${sizes.unit * 2}px;
      width: max-content;
    }

    a {
      color: ${colors.link};
      &:focus {
        color: ${colors.link_dark};
      }
      &:hover {
        color: ${colors.link_bright};
      }

      &:visited {
        color: ${colors.link_visited};

        &:focus {
          color: ${colors.link_visited_dark};
        }
        &:hover {
          color: ${colors.link_visited_bright};
        }
      }
    }

    ul {
      list-style-type: circle;
      margin: ${sizes.unit * 0.5}px 0 ${sizes.unit * 0.5}px ${sizes.unit * 3}px;

    }

    ol {
      list-style-type: decimal;
      margin: ${sizes.unit * 0.5}px 0 ${sizes.unit * 0.5}px ${sizes.unit * 3}px;
    }

    li {
      line-height: 1.8;
    }

    table {
      margin: ${sizes.unit * 1.5}px 0;
      max-width: 100%;
      overflow: auto;
      width: max-content;

      tr {
        &:nth-of-type(2n) {
          background-color: ${colors.grey_dark};
        }
      }

      th {
        font-weight: bold;
      }

      th, td {
        border: solid 1px ${colors.grey_medium};
        color: ${colors.white};
        padding: ${sizes.unit* 0.75}px ${sizes.unit * 1.5}px;
      }
    }
  `,
};

type Props = {
  content: string;
}

const Article = ({ content }: Props) => (
  <div className="rc-Article" css={styles.articleWrapper}>
    <Metatags />
    <section css={styles.articleStyles}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </section>
  </div>
);

export default Article;
