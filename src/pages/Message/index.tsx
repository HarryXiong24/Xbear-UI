import React from 'react';
import MessageDemo from './demo';
import MessageDoc from './doc';
import Tabs from '@/components/Tabs';

const MessagePage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <Tabs.Item label="Demo">
        <MessageDemo />
      </Tabs.Item>
      <Tabs.Item label="API">
        <MessageDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default MessagePage;
