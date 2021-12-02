import React, { useState } from 'react';
import IconDemo from './demo';
import IconDoc from './doc';
import Tabs from '@/components/Tabs/tabs';
import TabItem from '@/components/Tabs/tabItem';

const IconPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <TabItem label="Demo">
        <IconDemo />
      </TabItem>
      <TabItem label="API">
        <IconDoc />
      </TabItem>
    </Tabs>
  );
};

export default IconPage;
