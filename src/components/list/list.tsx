import * as React from 'react';
import classNames from 'classnames'

const classPrefix = `kpui-list`;
export interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div className={classNames(`${classPrefix}`,`${classPrefix}-default`)}>
      <div className={`${classPrefix}-inner`}>{children}</div>
    </div>
  );
};
