import * as React from 'react';
import classNames from 'classnames';
import {
  motion,
  AnimatePresence,
  useAnimation,
  Variants,
  AnimationControls,
} from 'framer-motion';

const classPrefix = `kpui-toast`;

export interface ToastProps {
  type?: 'info' | 'success' | 'error' | 'warning';
  position?: 'top' | 'bottom' | 'center';
  content: React.ReactNode;
  onClose?: () => void;
  duration?: number;
  visible: boolean;
}

const animation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const Toast: React.FC<ToastProps> = ({ content, position, visible }) => {
  const contentControls: AnimationControls = useAnimation();
  React.useEffect(() => {
    visible ? contentControls.start('visible') : contentControls.start('exit');
  }, [visible]);

  const top = React.useMemo(() => {
    switch (position) {
      case 'top':
        return '20%';
      case 'bottom':
        return '80%';
      default:
        return '50%';
    }
  }, [position]);

  return (
    <AnimatePresence>
      <motion.div
        style={{ top }}
        className={classNames(
          `${classPrefix}-wrap`,
          `${classPrefix}-wrap-text`
        )}
        initial="hidden"
        animate={contentControls}
        variants={animation}
        exit="hidden"
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};
