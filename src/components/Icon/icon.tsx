import React from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

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
