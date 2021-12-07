import * as React from 'react';
import { Modal } from '../../../src/index';
import { PayListTest } from '../payList';
import CheckListTest from '../checkList';

export const ModalTest = () => {
  const [visible, setVisible] = React.useState(false);

  const openModal = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal
        visible={visible}
        onClose={handleClose}
      >
        <PayListTest />
        <CheckListTest />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
        hahahhahaha
        <br />
      </Modal>
    </>
  );
};
