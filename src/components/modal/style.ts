// import { css } from '@emotion/css';

// export const indexStyle = {
//   modalWrapper: css({
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 9999990,
//     overflow: 'hidden',
//     pointerEvents: 'none',
//   }),
// };

// export const modalStyle = {
//   modalBg: css({
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: 'rgba(0,0,0,.4)',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 1,
//     pointerEvents: 'auto',
//   }),

//   modalBox: css({
//     width: '100vw',
//     position: 'fixed',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 2,
//     borderTopLeftRadius: '10px',
//     borderTopRightRadius: '10px',
//     padding: '0 20px 10px',
//     boxSizing: 'border-box',
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//     pointerEvents: 'auto',
//   }),

//   contextBox: css({
//     width: '100%',
//     boxSizing: 'border-box',
//     overflow: 'auto',
//     position: 'relative',
//   }),
// };

export const modalAnimation = {
  backdrop: {
    visible: {
      display: 'block',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
    },
  },
  bottom: {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
  left: {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
};

// export const modalHeadStyle = {
//   modalHead: css({
//     width: '100%',
//     height: '50px',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   }),
//   headTitle: css({
//     flex: 1,
//     textAlign: 'center',
//     fontSize: '16px',
//   }),
//   headBtn: css({
//     display: 'inline-block',
//     width: '60px',
//     fontSize: '14px',
//   }),
// };
