import React from 'react';
import IconDemo from './demo';
import IconDoc from './doc';
import Tabs from '@/components/Tabs';

const IconPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <Tabs.Item label="Demo">
        <IconDemo />
      </Tabs.Item>
      <Tabs.Item label="API">
        <IconDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default IconPage;
