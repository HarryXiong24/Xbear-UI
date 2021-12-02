import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@/components/Card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import IconMD from './Icon.md';
import '@/styles/example.scss';

const IconDoc = () => {
  return (
    <Card>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        // eslint-disable-next-line react/no-children-prop
        children={IconMD}
      />
    </Card>
  );
};

export default IconDoc;
