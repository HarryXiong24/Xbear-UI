import React from 'react';
// import ReactMarkDown from 'react-markdown';
// import rehypeHighlight from 'rehype-highlight';
// import remarkGfm from 'remark-gfm';
import Introduction from './README.md';
import './index.scss';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="Home">
      {/* <ReactMarkDown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        // eslint-disable-next-line react/no-children-prop
        children={Introduction}
      /> */}
      <Introduction />
    </div>
  );
};

export default Home;
