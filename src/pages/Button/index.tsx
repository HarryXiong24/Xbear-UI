import React from 'react';
import Tabs from '@/components/Tabs';
import TabItem from '@/components/Tabs/tabItem';
import ButtonDemo from './demo';
import ButtonDoc from './doc';
import '@/styles/example.scss';

const ButtonPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <TabItem label="Demo">
        <ButtonDemo />
      </TabItem>
      <TabItem label="API">
        <ButtonDoc />
      </TabItem>
    </Tabs>
  );
};

export default ButtonPage;
