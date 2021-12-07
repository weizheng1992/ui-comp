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
      transitionEnd: {
        display: 'none',
      },
    },
  },
};
