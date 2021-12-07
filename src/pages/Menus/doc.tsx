import React from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@/components/Card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import MenusMD from './Menus.md';
import '@/styles/example.scss';

const MenusDoc = () => {
  return (
    <Card>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        // eslint-disable-next-line react/no-children-prop
        children={MenusMD}
      />
    </Card>
  );
};

export default MenusDoc;
