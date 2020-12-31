import React, { useState, useEffect } from "react";
import Dropdown from "components/Dropdown";
import { useDropdown } from "hooks";
import Label from "components/Label";
import Layout from "components/Layout";
import List from "components/List";
import Divider from "components/Divider";
import styled from "styled-components";

import { okkotData, IOkkotData } from "data";
import { moneyFormat } from "moneyFormat";

const Section = styled.div`
  margin: 32px 0;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #c2c2c2;
  padding: 16px;
  font-size: 18px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 120px;
  height: 42px;
  border-radius: 8px;
  outline: none;
  background-color: #626262;
  color: #fff;
  border: 1px solid #626262;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

interface ICartData extends IOkkotData {
  checked: boolean;
}

const Cart = () => {
  const [lists, setLists] = useState<ICartData[]>([]);
  const { value: dropdownValue, setValue, open, setOpen } = useDropdown();
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);

  useEffect(() => {
    const cartData = okkotData.map((data) => ({ ...data, checked: false }));
    setLists(cartData);
  }, []);

  useEffect(() => {
    calcTotal();
  }, [lists]);

  const calcTotal = () => {
    const checkedList = lists.filter((list) => list.checked);
    let total = 0;
    checkedList.forEach(
      (checked) => (total += checked.currentCount * checked.price)
    );
    setTotal(total);
    let count = 0;
    checkedList.forEach((checked) => (count += checked.currentCount));
    setAmount(count);
    let fee = 0;
    checkedList.forEach((checked) => (fee += checked.deliveryPrice));
    setFee(fee);
  };

  const handleClick = () => {
    const checkedList = lists.filter((list) => list.checked);
    const orderList = {
      lists: checkedList,
      totalPayment: total + fee,
      method: dropdownValue,
    };
    console.log(orderList);
  };

  return (
    <Layout>
      <Label value="장바구니" size="28px" weight="600" margin="0 0 32px 0" />
      <Divider />
      <Section>
        <Label value="주소" size="22px" weight="500" margin="0 0 8px 0" />
        <Label value="서울시 강남구 도산대로 174 7층" />
      </Section>
      <Section>
        <Label value="배송 방법" size="22px" weight="500" margin="0 0 8px 0" />
        <Dropdown
          value={dropdownValue}
          setValue={setValue}
          open={open}
          setOpen={setOpen}
        >
          <Label value="직접 배송: 판매자가 직접 배송" />
          <Label value="픽업: 정해진 시간에 픽업" />
          <Label value="택배 배송" />
        </Dropdown>
      </Section>
      <Section>
        <Label value="상품 내역" size="22px" weight="500" margin="0 0 24px 0" />
        <Label value="전체 선택!" onClick={() => setSelectAll(true)} />
        <Divider />
        {lists.length === 0 ? (
          <Section>
            <Label value="장바구니가 비었습니다!" />
          </Section>
        ) : (
          lists.map((list) => (
            <List
              id={list.id}
              key={list.id}
              name={list.name}
              currentCount={list.currentCount}
              stock={list.stock}
              price={list.price}
              selectAll={selectAll}
              setSelectAll={(state: boolean) => setSelectAll(state)}
              lists={lists}
              setLists={setLists}
            />
          ))
        )}
      </Section>
      <Section>
        <Total>
          <Label value={`총 상품 금액 : ${moneyFormat(total)}원`} />
          <Label value={`총 상품 수량 : ${amount}개`} />
          <Label value={`총 배송비 : ${moneyFormat(fee)}원`} />
          <Label value={`총 결제하실 금액 : ${moneyFormat(total + fee)}원`} />
        </Total>
      </Section>
      <ButtonDiv>
        <Button onClick={handleClick}>주문하기</Button>
      </ButtonDiv>
    </Layout>
  );
};

export default Cart;
