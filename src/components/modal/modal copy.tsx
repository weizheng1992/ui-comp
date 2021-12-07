import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

import ModalHeader from './components/ModalHeader';
import Mark from '../mask';

// import { modalAnimation } from './style';
import { mergeProps } from '../../utils/with-default-props';

import type { ModalProps } from './modalTypes';

const defaultProps = {
  visible: false,
  mode: 'bottom',
  mask: true,
};
const classPrefix = 'kpui-modal';

const ModalBox: React.FC<ModalProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  const {
    children,
    visible,
    header,
    title,
    onClose,
    markStyle,
    mode,
    mask,
    markClassName,
  } = props;

  const contentControls = useAnimation();
  const [active, setActive] = useState(visible);
  useEffect(() => {
    visible ? contentControls.start('visible') : contentControls.start('exit');
    visible && setActive(true);
  }, [visible]);

  const headerLoad = useCallback(() => {
    if (header) return header;
    if (header === null) return null;
    return <ModalHeader title={title} onClose={onClose} />;
  }, [header]);

  const onAnimationend = useCallback((definition: any) => {
    console.log(definition);
    if (definition.opacity === 0) {
      setActive(false);
    }
  }, []);

  // const motionMode = useMemo(() => {
  //   const baseInitial: any = { opacity: 0 };
  //   const baseAnimate: any = {
  //     opacity: visible ? 1 : 0,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   };
  //   switch (mode) {
  //     case 'bottom':
  //       baseInitial.y = '100%';
  //       baseAnimate.y = visible ? '0' : '100%';
  //       break;
  //     case 'left':
  //       baseInitial.x = '100%';
  //       baseAnimate.x = visible ? '0' : '100%';
  //       break;
  //     default:
  //       baseInitial.y = '100%';
  //       baseAnimate.y = visible ? '0' : '100%';
  //       break;
  //   }
  //   return {
  //     baseInitial,
  //     baseAnimate,
  //   };
  // }, [mode, visible]);

  return (
    <div className={classPrefix} style={{ display: active ? 'unset' : 'none' }}>
      <AnimatePresence>
        {mask && (
          <Mark
            onMaskClick={onClose}
            style={markStyle}
            visible={visible}
            classname={markClassName}
          />
        )}
        <motion.div
          className={`${classPrefix}-body`}
          initial={
            mode === 'bottom'
              ? { opacity: 0, y: '100%' }
              : { opacity: 0, x: '100%' }
          }
          animate={
            mode === 'bottom'
              ? {
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : '100%',
                  transition: {
                    duration: 0.3,
                  },
                }
              : {
                  opacity: visible ? 1 : 0,
                  x: visible ? 0 : '100%',
                  transition: {
                    duration: 0.3,
                  },
                }
          }
          // initial={motionMode.baseInitial}
          // animate={motionMode.baseAnimate}
          key={'modal'}
          onAnimationComplete={onAnimationend}
        >
          {headerLoad()}
          <div className={`${classPrefix}-context`}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ModalBox;
