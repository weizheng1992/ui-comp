import * as React from 'react';
import classnames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { NativeProps } from '../../utils/native-props';

import { modalAnimation } from './style';

export type MaskProps = {
  visible: boolean;
  style?: React.CSSProperties;
  onMaskClick?: () => void;
  classname?: string;
} & NativeProps<'--z-index'>;

const classPrefix = `kpui-mask`;

const Mark: React.FC<MaskProps> = (props) => {
  const { style, visible, classname, onMaskClick } = props;
  const maskControls = useAnimation();

  React.useEffect(() => {
    visible ? maskControls.start('visible') : maskControls.start('hidden');
  }, [visible]);
  return (
    <motion.div
      className={classPrefix}
      variants={modalAnimation.backdrop}
      initial="hidden"
      animate={maskControls}
      exit="hidden"
    >
      {onMaskClick && (
        <div
          key={'mask'}
          onClick={onMaskClick}
          style={style}
          className={classnames(`${classPrefix}-button`, classname)}
        ></div>
      )}
      <div className={`${classPrefix}-content`}></div>
    </motion.div>
  );
};

export default Mark;
