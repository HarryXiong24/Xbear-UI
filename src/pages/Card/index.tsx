import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import CardMD from './Card.md';
import '@/styles/example.scss';

const CardPage = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  return (
    <>
      <h2>Card 卡片</h2>
      <div className="container">
        <Card
          title="基本使用"
          shadow
          style={cardCss}
          titleOverflowHidden={false}
          // cover={Img}
        >
          <h1>I am Card!</h1>
        </Card>
        <Card
          title="title 右边自定义 Node 元素"
          shadow
          style={cardCss}
          extra={
            <div>
              <Button
                btnType="ghost"
                onClick={() => {
                  alert('I was clicked!');
                }}
              >
                按钮
              </Button>
            </div>
          }
        >
          <h1>I am Card!</h1>
        </Card>
        <Card
          title="卡片带按钮"
          shadow
          actions={[
            {
              name: '按钮1',
              event: () => {
                alert('I was clicked!');
              },
            },
            {
              name: '按钮2',
            },
          ]}
          style={cardCss}
        >
          <h1>I am Card!</h1>
        </Card>
        <Card title="悬浮出现卡片阴影" showShadowWhenHover style={cardCss}>
          <h1>I am Card!</h1>
        </Card>
      </div>
      <Card shadow style={{ marginTop: 50 }}>
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
          // eslint-disable-next-line react/no-children-prop
          children={CardMD}
        />
      </Card>
    </>
  );
};

export default CardPage;
