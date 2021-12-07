import * as React from 'react';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  header?: React.ReactNode | null;
  children: React.ReactNode;
  bodyStyle?: React.CSSProperties;
  title?: string | React.ReactNode;
  mode?: 'left' | 'bottom';
  mask?: boolean;
  markStyle?: React.CSSProperties;
  markClassName?:string;
}
