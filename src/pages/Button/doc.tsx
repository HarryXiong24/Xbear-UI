import React from 'react';
import Card from '@/components/Card';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import ButtonMD from './Button.md';

const ButtonDoc = () => {
  return (
    <Card>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        // eslint-disable-next-line react/no-children-prop
        children={ButtonMD}
      />
    </Card>
  );
};

export default ButtonDoc;
