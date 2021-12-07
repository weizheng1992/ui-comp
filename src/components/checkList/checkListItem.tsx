import React, { FC, useContext } from 'react';
import List, { ListItemProps } from '../list';

import { CheckListContext } from './context';


export type CheckListItemProps = Pick<
  ListItemProps,
  'children' | 'prefix' | 'onClick'
> & {
  value: string;
  readOnly?: boolean;
};

const classPrefix = `kpui-check-list-item`

export const CheckListItem: FC<CheckListItemProps> = (props) => {
  const context = useContext(CheckListContext);
  if (context === null) {
    console.warn(
      'CheckList.Item',
      'CheckList.Item can only be used inside CheckList.'
    );
    return null;
  }
  const active = context.value.includes(props.value);
  const readOnly = props.readOnly || context.readOnly;

  const extra = <div className={`${classPrefix}-extra`}>{active ? context.activeIcon : null}</div>;

  return (
    <List.Item
      prefix={props.prefix}
      onClick={(e) => {
        if (readOnly) return;
        if (active) {
          context.uncheck(props.value);
        } else {
          context.check(props.value);
        }
        props.onClick?.(e);
      }}
      arrow={false}
      extra={extra}
    >
      {props.children}
    </List.Item>
  );
};
