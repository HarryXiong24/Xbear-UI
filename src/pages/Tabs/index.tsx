import React from 'react';
import TabsDemo from './demo';
import TabsDoc from './doc';
import Tabs from '@/components/Tabs';

const TabsPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <Tabs.Item label="Demo">
        <TabsDemo />
      </Tabs.Item>
      <Tabs.Item label="API">
        <TabsDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default TabsPage;
