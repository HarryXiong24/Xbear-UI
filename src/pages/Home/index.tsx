import React from 'react';
// import ReactMarkDown from 'react-markdown';
// import rehypeHighlight from 'rehype-highlight';
// import remarkGfm from 'remark-gfm';
// import Introduction from './README.md';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="Home">
      <h1>I am Home Page!</h1>
      {/* <ReactMarkDown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        // eslint-disable-next-line react/no-children-prop
        children={Introduction}
      /> */}
    </div>
  );
};

export default Home;
