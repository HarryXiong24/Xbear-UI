import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { scopedClass } from '../../utils/scopedClass';
import { TabsProps, TabItemProps } from './type';
import './style.scss';
import '@/styles';

// 生成构造作用域函数
const scFunc = scopedClass('xbear-tabs');

export const TabWrap: FC<TabsProps> = (props) => {
  const { defaultIndex, className, onSelect, type, children } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // 点击 Tab 触发的事件
  const handleItemClick = (index: number, disabled: boolean) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };

  const classes = classNames('xbear-tabs', className);

  const navClass = classNames(scFunc('nav'), {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });

  // 渲染 Tab 标签
  const renderNavLinks = () => {
    return React.Children.map(children, function (child, index) {
      const childElement =
        child as React.FunctionComponentElement<TabItemProps>;
      const { label, disabled = false } = childElement.props;
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const classes = classNames(scFunc('nav-item'), {
        'is-active': activeIndex === index,
        disabled: disabled,
      });
      return (
        <li
          role="presentation"
          key={`nav-item-${index}`}
          className={classes}
          onClick={() => handleItemClick(index, disabled)}
        >
          {label}
        </li>
      );
    });
  };

  // 渲染每个 Tab 里呈现的内容
  const renderContent = () => {
    return React.Children.map(children, function (child, index) {
      if (index === activeIndex) {
        return child;
      }
    });
  };

  return (
    <div className={classes}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className={scFunc('content')}>{renderContent()}</div>
    </div>
  );
};

TabWrap.defaultProps = {
  defaultIndex: 0,
  type: 'line',
  className: '',
  onSelect: () => {
    return undefined;
  },
};

export default TabWrap;
