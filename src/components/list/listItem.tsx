import * as React from 'react';
import Icon from '../icon';

const classPrefix = `kpui-list-item`;

export interface ListItemProps {
  children: string | React.ReactNode;
  prefix?: React.ReactNode;
  arrow?: boolean | React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  extra?: React.ReactNode;
}

export const Item: React.FC<ListItemProps> = ({
  children,
  prefix,
  arrow = false,
  onClick = () => {},
  extra,
}) => {
  return (
    <div className={`${classPrefix}-content`} onClick={onClick}>
      {prefix && (
        <div className={`${classPrefix}-content-prefix`}>{prefix}</div>
      )}
      <div className={`${classPrefix}-content-main`}>{children}</div>
      {extra && <div className={`${classPrefix}-content-extra`}>{extra}</div>}
      {arrow && (
        <div className={`${classPrefix}-content-arrow`}>
          {arrow === true ? <Icon name="arrow" /> : arrow}
        </div>
      )}
    </div>
  );
};
