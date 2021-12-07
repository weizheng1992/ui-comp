import React, { FC } from 'react';
import type { CSSProperties } from 'react';

import icons from '../../assets/icon.svg';

export interface IconProps {
  name: string;
  style?: CSSProperties;
  className?: string;
}

const Icon: FC<IconProps> = ({ name, style, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      style={style}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export default Icon;
