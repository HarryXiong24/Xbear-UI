import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { ButtonProps, ButtonSize, ButtonType } from './type';
import './style.scss';
import '@/styles';

const prefixCls = 'xbear-btn';

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'chocolate-ui'
 * ~~~
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    icon,
    theme,
    loading,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType as ButtonType}`]: btnType,
    [`${prefixCls}-${size as ButtonSize}`]: size,
    [`${prefixCls}-loading`]: loading,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {loading ? (
          <Icon icon="spinner" theme={theme} style={{ marginRight: 5 }} />
        ) : icon ? (
          <Icon icon={icon} theme={theme} style={{ marginRight: 5 }} />
        ) : null}
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  className: '',
  disabled: false,
  size: 'sm',
  btnType: 'default',
  href: '',
};

export default Button;
