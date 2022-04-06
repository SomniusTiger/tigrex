/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Metatags from '../meta/Metatags';

import { jsx, css } from '@emotion/react';
import { sizes, colors } from '../../components/styles_shared/variables';

const styles = {
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

    p {
      font-size: 1.5em;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: bold;
    }

    blockquote {
      border-left: solid 6px ${colors.grey_bright};
      margin: ${sizes.unit}px 0 ${sizes.unit}px;
      padding: ${sizes.unit * 0.5}px ${sizes.unit * 2}px;
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

    }

    ol {

    }

    table {
      
    }
  `,
};

type Props = {
  content: string;
}

const Article = ({ content }: Props) => (
  <div className="rc-Article">
    <Metatags />
    <section css={styles.articleStyles}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </section>
  </div>
);

export default Article;
