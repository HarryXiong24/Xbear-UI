import React from 'react';
import ReactMarkDown from 'react-markdown';
import Card from '@/components/Card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import Introduction from './Introduction.md';
import './index.scss';

const Home: React.FC = (): JSX.Element => {
  return (
    <Card className="Home">
      <section className="header">
        <h1>Welcome to xbear-ui 👋</h1>
        <h2>欢迎使用 xbear-ui 👋</h2>
        <p className="tags">
          <img
            alt="Version"
            src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"
            className="item"
          />
          <a
            href="https://github.com/HarryXiong24/Xbear-UI/blob/master/README.md"
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
            href="https://github.com/HarryXiong24/Xbear-UI/blob/master/LICENSE"
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
