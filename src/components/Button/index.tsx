import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { ButtonProps, ButtonSize, ButtonType } from './type';
import './style.scss';
import '@/styles';

export const Button: React.FC<ButtonProps> = (props) => {
  const prefixCls = 'xbear-btn';
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
    circle,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType as ButtonType}`]: btnType,
    [`${prefixCls}-${size as ButtonSize}`]: size,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-circle`]: circle,
    // 因为原生 a 标签里面没有 disabled 属性，所以对于 link 类型，我们手动实现 disabled 属性
    disabled: btnType === 'link' && disabled,
  });

  const classes_circle = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType as ButtonType}`]: btnType,
    [`${prefixCls}-circle-${size as ButtonSize}`]: size,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-circle`]: circle,
    // 因为原生 a 标签里面没有 disabled 属性，所以对于 link 类型，我们手动实现 disabled 属性
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else if (circle) {
    return (
      <button className={classes_circle} disabled={disabled} {...restProps}>
        <Icon
          icon={icon!}
          theme={theme}
          style={{ width: '1rem', height: '1rem' }}
        />
      </button>
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
