import React from 'react';
import Card from '@/components/Card';
import '@/styles/example.scss';

const CardPage = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  return (
    <div className="container">
      <Card title="基本使用" shadow style={cardCss}>
        <h1>I am Card page!</h1>
      </Card>
      <Card title="基本使用" shadow style={cardCss}>
        <h1>I am Card page!</h1>
      </Card>
      <Card title="基本使用" shadow style={cardCss}>
        <h1>I am Card page!</h1>
      </Card>
    </div>
  );
};

export default CardPage;
