import React from 'react';
import Card from '@/components/Card';
import '@/styles/example.scss';

const CardPage = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  return (
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
        title="title 右边自定义"
        shadow
        style={cardCss}
        extra={
          <div>
            <p>extra</p>
          </div>
        }
      >
        <h1>I am Card!</h1>
      </Card>
      <Card
        title="卡片带按钮"
        shadow
        actions={['按钮1', '按钮2']}
        style={cardCss}
      >
        <h1>I am Card!</h1>
      </Card>
      <Card title="点击出现卡片阴影" showShadowWhenHover style={cardCss}>
        <h1>I am Card!</h1>
      </Card>
    </div>
  );
};

export default CardPage;
