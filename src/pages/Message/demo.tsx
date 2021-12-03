import React from 'react';
import Card from '@/components/Card';
import { Message } from '@/components/Message';
import Button from '@/components/Button';
import '@/styles/example.scss';

const MessageDemo = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  const btnCss = { marginBottom: 20, marginRight: 20 };
  const textCss = { marginBottom: 20 };
  return (
    <div className="container">
      <div className="item">
        <Card title="基础使用" style={cardCss} shadow>
          <div style={textCss}>用作页面信息反馈</div>
          <Button
            onClick={() => Message.info({ content: '这是一条普通的提示' })}
            style={btnCss}
            btnType="primary"
          >
            展示信息提示
          </Button>
        </Card>
      </div>
      <div className="item">
        <Card title="其他提示类型" style={cardCss} shadow>
          <div>
            <Button
              onClick={() =>
                Message.success({ content: '这是一条 Success 提示' })
              }
              style={btnCss}
              btnType="success"
            >
              Success
            </Button>
            <Button
              onClick={() =>
                Message.warning({ content: '这是一条 Warning 提示' })
              }
              style={btnCss}
              btnType="warning"
            >
              Warning
            </Button>
            <Button
              onClick={() => Message.error({ content: '这是一条 Danger 提示' })}
              style={btnCss}
              btnType="danger"
            >
              Danger
            </Button>
          </div>
          <div>
            <Button
              onClick={() =>
                Message.loading({
                  content: '这是一条 Loading 提示',
                  duration: 2,
                })
              }
              style={btnCss}
            >
              Loading
            </Button>
            <Button
              onClick={() => Message.error({ content: '这是一条 Error 提示' })}
              style={btnCss}
            >
              Error
            </Button>
          </div>
        </Card>
      </div>

      <div className="item">
        <Card title="进阶使用" style={cardCss} shadow>
          <div style={textCss}>自定义关闭时间</div>
          <div>
            <Button
              onClick={() =>
                Message.error({ content: '5 秒后关闭提示信息', duration: 5 })
              }
              style={btnCss}
            >
              延迟 5 秒
            </Button>
          </div>
          <div>
            <div style={textCss}>关闭时回调</div>
            <Button
              onClick={() =>
                Message.loading({
                  content: '请求数据中...',
                  onClose: () => Message.success({ content: '已完成！' }),
                })
              }
              style={btnCss}
            >
              完成回调
            </Button>
          </div>
          <div>
            <div style={textCss}>
              设置自己想要的 <code> Icon </code>
            </div>
            <Button
              onClick={() =>
                Message.error({
                  content: '自定义 Icon 提示',
                  icon: 'bell-slash',
                })
              }
              style={btnCss}
            >
              设置自定义图标
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MessageDemo;
