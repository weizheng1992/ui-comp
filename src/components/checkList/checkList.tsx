import React, { ReactNode, FC, useState } from 'react';
import { CheckListContext } from './context';
import { mergeProps } from '../../utils/with-default-props';
import Icon from '../icon';

import List, { ListProps } from '../list';

export type CheckListProps = ListProps & {
  defaultValue?: string[];
  value?: string[];
  onChange?: (val: string[]) => void;
  multiple?: boolean;
  activeIcon?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
};

const defaultProps = {
  multiple: false,
  defaultValue: [],
  activeIcon: <Icon name="checkOutline" />,
};

const CheckList: FC<CheckListProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  const [value, setValue] = useState<string[]>(props.defaultValue);

  function check(val: string) {
    if (props.multiple) {
      setValue([...value, val]);
    } else {
      setValue([val]);
    }
  }

  function uncheck(val: string) {
    setValue(value.filter((item) => item !== val));
  }

  const { activeIcon, disabled, readOnly } = props;
  return (
    <CheckListContext.Provider
      value={{
        value,
        check,
        uncheck,
        activeIcon,
        disabled,
        readOnly,
      }}
    >
      <List>{props.children}</List>
    </CheckListContext.Provider>
  );
};

export default CheckList;
