import React, { useState, useEffect } from "react";
import Dropdown from "components/Dropdown";
import { useDropdown } from "hooks";
import Label from "components/Label";
import Layout from "components/Layout";
import List from "components/List";
import Divider from "components/Divider";
import styled from "styled-components";

import {
  okkotData,
  IOkkotData,
  deliveryTypeData,
  IDeliveryTypeData,
} from "data";
import { moneyFormat } from "moneyFormat";
import Checkbox from "components/Checkbox";

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

const DropdownFormat = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

interface ICartData extends IOkkotData {
  checked: boolean;
}

const Cart = () => {
  const [lists, setLists] = useState<ICartData[]>([]);
  const [deliveryType, setDeliveryType] = useState<IDeliveryTypeData[]>([]);
  const { value: dropdownValue, setValue, open, setOpen } = useDropdown(
    deliveryType
  );
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);

  useEffect(() => {
    const cartData = okkotData.map((data) => ({ ...data, checked: false }));
    setLists(cartData);
    setDeliveryType(deliveryTypeData);
  }, []);

  useEffect(() => {
    calcTotal();
  }, [lists]);

  useEffect(() => {
    if (dropdownValue) setFee(dropdownValue.delivery_price);
  }, [dropdownValue]);

  const calcTotal = () => {
    const checkedList = lists.filter((list) => list.checked);
    let total = 0;
    checkedList.forEach(
      (checked) => (total += checked.current_count * checked.product_price)
    );
    setTotal(total);
    let count = 0;
    checkedList.forEach((checked) => (count += checked.current_count));
    setAmount(count);
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

  const handleCheckboxClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const id = target.id;
    const checked = !target.classList.contains("checked");
    const updatedData = lists.map((list) =>
      `${list.id}` === id ? { ...list, checked: checked } : list
    );
    const allChecked = updatedData.every((list) => list.checked);
    setLists(updatedData);
    setSelectAll(allChecked);
  };

  const handleSelectAll = () => {
    const updatedData = lists.map((list) => ({ ...list, checked: !selectAll }));
    setLists(updatedData);
    setSelectAll((prev) => !prev);
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
        <Label value="배송 방법" size="22px" weight="500" margin="0 0 12px 0" />
        <Dropdown
          value={dropdownValue}
          setValue={setValue}
          open={open}
          setOpen={setOpen}
          defaultValue={
            dropdownValue
              ? `${dropdownValue.name} (${moneyFormat(
                  dropdownValue.delivery_price
                )}원)`
              : "선택해주세요."
          }
        >
          {deliveryType.map((delivery) => (
            <DropdownFormat
              key={delivery.id}
              id={`${delivery.id}`}
              className={"dropdown__option"}
            >
              <Label
                value={`${delivery.name}`}
                weight="500"
                id={`${delivery.id}`}
              />
              <Label
                value={`${moneyFormat(delivery.delivery_price)}원`}
                size="14px"
                color="#727272"
                weight="500"
                id={`${delivery.id}`}
              />
            </DropdownFormat>
          ))}
        </Dropdown>
      </Section>
      <Section>
        <Label value="상품 내역" size="22px" weight="500" margin="0 0 12px 0" />
        <CheckboxWrapper>
          <Checkbox checked={selectAll} setChecked={handleSelectAll} />
          <Label value="전체" margin="0 0 0 16px" />
        </CheckboxWrapper>
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
              name={list.product_name}
              imageUrl={list.image_url}
              currentCount={list.current_count}
              stock={list.stock}
              price={list.product_price}
              checked={list.checked}
              handleCheckboxClick={handleCheckboxClick}
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
