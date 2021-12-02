import React from 'react';
import CardDemo from './demo';
import CardDoc from './doc';
import Tabs from '@/components/Tabs/tabs';
import TabItem from '@/components/Tabs/tabItem';

const CardPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <TabItem label="Demo">
        <CardDemo />
      </TabItem>
      <TabItem label="API">
        <CardDoc />
      </TabItem>
    </Tabs>
  );
};

export default CardPage;
