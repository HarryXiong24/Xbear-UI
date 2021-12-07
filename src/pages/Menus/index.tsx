import React from 'react';
import MenusDemo from './demo';
import MenusDoc from './doc';
import Tabs from '@/components/Tabs';

const MenusPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <Tabs.Item label="Demo">
        <MenusDemo />
      </Tabs.Item>
      <Tabs.Item label="API">
        <MenusDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default MenusPage;
