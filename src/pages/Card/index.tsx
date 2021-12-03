import React from 'react';
import CardDemo from './demo';
import CardDoc from './doc';
import Tabs from '@/components/Tabs';

const CardPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <Tabs.Item label="Demo">
        <CardDemo />
      </Tabs.Item>
      <Tabs.Item label="API">
        <CardDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default CardPage;
