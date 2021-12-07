import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../modal';
import List from '../list';
import HuabeiModal from './HuabeiModal';
import { Toast } from '../../index';
import { isWeChat } from '../../utils';

import './payList.less';

import {
  PaySdk,
  ApiCourseDetailParams,
  payChannel,
  ApiCourseDetailResult,
  PayAllProps,
  EmiAmounts,
  PayOrderParams,
  PayTypeProps,
  PayType,
} from 'kmos-paysdk-utils';

import { HUABEI_TYPE, IMG_URL } from './const';

import type { ModalProps } from '../modal/modalTypes';

export type PayListProps = {
  list?: any[];
  onError?: (msg: string) => void;
  orderNo: string;
  userId?: string;
} & Omit<ModalProps, 'children'> &
  ApiCourseDetailParams;

const PayList: React.FC<PayListProps> = (props) => {
  const [data, setdata] = useState<ApiCourseDetailResult | null>(null);
  const [huabeiVisbile, setHuabeiVisbile] = useState<boolean>(false);
  const [huabeiInfo, setHuabeiInfo] = useState<payChannel | null>(null);
  const [listvisible, setListvisible] = useState(props.visible)

  React.useEffect(() => {
    if (props.visible) {
      setListvisible(true);
    }
  }, [props.visible]);


  useEffect(() => {
    const load = async () => {
      const { openid, unionid, channelCode, courseCode } = props;
      //?openid=o0IXitx_lVGqIU0Q26qYojqv4pAs&unionid=ocPQA1dkMB11rqsgUEktzVjISuQk
      const res = await PaySdk.getCourseDetail({
        params: {
          openid,
          unionid,
          channelCode,
          courseCode,
        },
        onError: (msg: string) => {
          props.onError ? props.onError(msg) : Toast.show(msg);
        },
      });
      setdata(res);
    };
    listvisible&&load();
  }, [listvisible]);

  const handlePayItem = useCallback(
    async (payType: PayType, index: number) => {
      if (HUABEI_TYPE === payType) {
        data && setHuabeiInfo(data.payChannel[index]);
        setHuabeiVisbile(true);
      } else {
        parOrderFn(payType);
      }
    },
    [data, props.orderNo]
  );

  const parOrderFn = useCallback(
    async (payType: PayType, emi?: number) => {
      const params: PayOrderParams = {
        openid: props.openid,
        orderNo: props.orderNo,
        payType: payType === 1 ? (isWeChat ? payType : 13) : payType,
      };
      emi && (params.emi = emi);
      emi && (params.userId = props.userId);
      const res: PayAllProps = await PaySdk.getPayorder({
        params,
        onError: (msg: string) => {
          props.onError ? props.onError(msg) : Toast.show(msg);
        },
      });

      const payParam: PayTypeProps = {
        type: payType,
        orderNo: props.orderNo,
        openid: props.openid,
        ...(res as PayAllProps),
      };
      PaySdk.pay(payParam);
    },
    [props.openid, props.orderNo, props.userId]
  );

  const handleHuabeiClose = () => {
    setHuabeiVisbile(false);
  };

  const handleHuabeiPay = (item: EmiAmounts) => {
    parOrderFn(HUABEI_TYPE, item.emi);
  };
  return (
    <Modal {...props}>
      <List>
        {data?.payChannel.map((item, index) => (
          <List.Item
            arrow={true}
            key={item.id}
            prefix={
              <img
                style={{ width: '23px', height: '23px' }}
                src={IMG_URL + item.icon}
              />
            }
            onClick={() => handlePayItem(item.payType, index)}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      {huabeiInfo && (
        <HuabeiModal
          visible={huabeiVisbile}
          info={huabeiInfo}
          onClose={handleHuabeiClose}
          onClickHuabeiPay={handleHuabeiPay}
        />
      )}
    </Modal>
  );
};

export default PayList;
