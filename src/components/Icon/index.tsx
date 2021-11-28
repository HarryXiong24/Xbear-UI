import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import '@/styles';
import { IconProps, ThemeProps } from './type';

const prefixCls = 'xbear-icon';

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, icon, ...restProps } = props;
  const classes = classNames('xbear-icon', className, {
    [`icon-${theme as ThemeProps}`]: theme,
    [`${prefixCls}-loading`]: icon === 'spinner',
  });
  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

export default Icon;
