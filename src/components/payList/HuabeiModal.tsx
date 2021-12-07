import React, { useCallback, useState,memo } from 'react';
import Modal from '../modal';
import CheckList from '../checkList';
import Button from '../button';

import { payChannel, EmiAmounts } from 'kmos-paysdk-utils';

import { IMG_URL } from './const';

import type { ModalProps } from '../modal/modalTypes';

const classPrefix = `kpui-huabei-list`;

type PayListProps = {
  info: payChannel;
  onClickHuabeiPay: (item: EmiAmounts) => void;
} & Omit<ModalProps, 'children'>;

const HuabeiModal: React.FC<PayListProps> = (props) => {
  const {
    info: { emiAmounts },
    onClickHuabeiPay,
  } = props;

  const [item, setItem] = useState<EmiAmounts>({} as EmiAmounts);

  const handleCheckItem = useCallback((item: EmiAmounts) => {
    setItem(item);
  }, []);

  const handleToPay = useCallback(() => {
    onClickHuabeiPay(item);
  }, [item]);

  return (
    <Modal {...props} mode="left" title={'选择分期期数'}>
      <CheckList defaultValue={[]}>
        <CheckList.Item
          key={'1'}
          value={''}
          readOnly={true}
          prefix={
            <img
              style={{ width: '23px', height: '23px' }}
              src={IMG_URL + props.info.icon}
            />
          }
        >
          {props.info.name}
        </CheckList.Item>
        {emiAmounts &&
          emiAmounts.map((item: EmiAmounts) => (
            <CheckList.Item
              key={item.emi}
              onClick={() => handleCheckItem(item)}
              value={item.emi.toString()}
            >
              <p className={`${classPrefix}-emi`}>
                ￥{item.amount} x {item.emi}期
              </p>
              <p className={`${classPrefix}-emi-tips`}>免手续费</p>
            </CheckList.Item>
          ))}
      </CheckList>
      <Button onClick={handleToPay} color="primary" block>
        确认付款
      </Button>
    </Modal>
  );
};

export default memo(HuabeiModal);
