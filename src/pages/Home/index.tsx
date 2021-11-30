import React from 'react';
import ReactMarkDown from 'react-markdown';
import Card from '@/components/Card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import Introduction from './README.md';
import './index.scss';

const Home: React.FC = (): JSX.Element => {
  return (
    <Card className="Home" shadow>
      <section className="header">
        <h1>Welcome to react-vite-ts-start 👋</h1>
        <p className="tag">
          <img
            alt="Version"
            src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"
            className="item"
          />
          <a
            href="https://github.com/HarryXiong24/react-vite-ts-start/README.md"
            target="_blank"
            rel="noreferrer"
            className="item"
          >
            <img
              alt="Documentation"
              src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"
            />
          </a>
          <a
            href="https://github.com/HarryXiong24/react-vite-ts-start/MIT"
            target="_blank"
            rel="noreferrer"
            className="item"
          >
            <img
              alt="License: MIT"
              src="https://img.shields.io/badge/License-MIT-yellow.svg"
            />
          </a>
        </p>
      </section>
      <section className="content">
        <ReactMarkDown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
          // eslint-disable-next-line react/no-children-prop
          children={Introduction}
        />
      </section>
    </Card>
  );
};

export default Home;
