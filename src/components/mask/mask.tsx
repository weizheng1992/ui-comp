import * as React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// import { motion, useAnimation } from 'framer-motion';
import { NativeProps } from '../../utils/native-props';

// import { modalAnimation } from './style';

export type MaskProps = {
  visible: boolean;
  style?: React.CSSProperties;
  onMaskClick?: () => void;
  classname?: string;
} & NativeProps<'--z-index'>;

const classPrefix = `kpui-mask`;

const Mark: React.FC<MaskProps> = (props) => {
  const { style, visible, classname, onMaskClick } = props;
  // const maskControls = useAnimation();
  const [active, setActive] = React.useState(visible);

  React.useEffect(() => {
    // visible ? maskControls.start('visible') : maskControls.start('hidden');
    visible && setActive(true);
  }, [visible]);
  return (
    <CSSTransition
      classNames={`${classPrefix}-fade`}
      timeout={300}
      in={visible}
      onExited={() => setActive(false)}
    >
      <div
        className={classPrefix}
        style={{ display: active ? 'unset' : 'none' }}
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
      </div>
    </CSSTransition>
  );
};

export default Mark;
