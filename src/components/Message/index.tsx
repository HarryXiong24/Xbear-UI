import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Icon from '../Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeProps } from '../Icon/type';
import { IconType, MessageProps, MessageType, ShowProps } from './type';
import './style.scss';
import '@/styles/index';

export function Message(props: MessageProps) {
  const prefixCls = 'xbear-message';
  const { visible, children, icon, theme, type } = props;

  // 获取对应的图标类型
  const getIconType = (icon_type: string) => {
    switch (icon_type) {
      case IconType.SUCCESS:
        return { icon: 'check-circle', theme: 'success' };
      case IconType.INFO:
        return { icon: 'info-circle', theme: 'info' };
      case IconType.WARNING:
        return { icon: 'exclamation-circle', theme: 'warning' };
      case IconType.LOADING:
        return { icon: 'spinner', theme: 'primary' };
      case IconType.ERROR:
        return { icon: 'times-circle', theme: 'danger' };
      default:
        return { icon: 'check-circle', theme: 'success' };
    }
  };

  // 返回的渲染元素
  const result = (
    <div className={`${prefixCls}`}>
      <div
        className={classNames(`${prefixCls}-wrapper`, {
          [`${prefixCls}-open`]: visible,
          [`${prefixCls}-close`]: !visible,
        })}
      >
        <div className={classNames(`${prefixCls}-content`)}>
          {icon ? (
            <Icon icon={icon} theme={theme} style={{ marginRight: 8 }} />
          ) : (
            <Icon
              icon={getIconType(type).icon as IconProp}
              theme={getIconType(type).theme as ThemeProps}
              style={{ marginRight: 8 }}
            />
          )}
          <span>{children}</span>
        </div>
      </div>
    </div>
  );

  /**
   * Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案
   * ReactDOM.createPortal(child, container)
   * 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment
   * 第二个参数（container）是一个 DOM 元素。
   */
  // 将 result 渲染在 document.body 上
  return ReactDom.createPortal(result, document.body);
}

// 渲染 Message 的函数
const renderELement = (type: MessageType, props: ShowProps) => {
  const { onClose, duration = 1, content, icon } = props;
  const result = (
    <Message visible icon={icon} type={type}>
      {content}
    </Message>
  );
  const div = document.createElement('div');
  const close = () => {
    ReactDom.render(React.cloneElement(result, { visible: false }), div);
    setTimeout(() => {
      ReactDom.unmountComponentAtNode(div);
      div.remove();
    }, 500); // 等待动画执行完再销毁
  };
  ReactDom.render(result, div);
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      close();
      onClose && onClose();
      clearTimeout(timer);
      return resolve(null);
    }, duration * 1000);
  });
};

Message.success = (props: ShowProps) => {
  return renderELement('success', props);
};

Message.info = (props: ShowProps) => {
  return renderELement('info', props);
};

Message.warning = (props: ShowProps) => {
  return renderELement('warning', props);
};

Message.loading = (props: ShowProps) => {
  return renderELement('loading', props);
};

Message.error = (props: ShowProps) => {
  return renderELement('error', props);
};

export default Message;
