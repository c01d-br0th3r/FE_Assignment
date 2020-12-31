import Counter from "components/Counter";
import { useCounter } from "hooks/useCounter";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { IOkkotData } from "data";
import { useCheckbox } from "hooks/useCheckbox";
import Checkbox from "components/Checkbox";
import { moneyFormat } from "moneyFormat";

interface ICartData extends IOkkotData {
  checked: boolean;
}

interface IListProps {
  id: number;
  name: string;
  currentCount: number;
  stock: number;
  price: number;
  selectAll: boolean;
  setSelectAll: (state: boolean) => void;
  lists: ICartData[];
  setLists: Dispatch<SetStateAction<ICartData[]>>;
}

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c2c2c2;
  padding: 24px 12px;
  * {
    display: flex;
    justify-content: center;
  }
`;

const CheckBoxWrapper = styled.div`
  width: 50px;
`;

const ImgWrapper = styled.div`
  width: 150px;
`;

const TitleWrapper = styled.div`
  width: 350px;
`;

const CounterWrapper = styled.div`
  width: 200px;
`;

const PriceWrapper = styled.div`
  width: 200px;
`;

const CloseBtn = styled.div`
  width: 50px;
  cursor: pointer;
`;

const List: React.FC<IListProps> = ({
  id,
  name,
  currentCount,
  stock,
  price,
  selectAll,
  setSelectAll,
  lists,
  setLists,
}) => {
  const { count, countUp, countDown } = useCounter(currentCount, stock);
  const { checked, setCheckedToggle, setCheckedTrue } = useCheckbox(false);

  useEffect(() => {
    if (selectAll === true) {
      const updatedData = lists.map((list) => ({ ...list, checked: true }));
      setLists(updatedData);
      setCheckedTrue();
      setSelectAll(false);
    }
  }, [selectAll]);

  const countWithSetData = () => {
    const updatedData = lists.map((list) => {
      if (list.id === id) {
        list.currentCount = count;
      }
      return list;
    });
    setLists(updatedData);
  };

  const checkWithSetData = () => {
    const updatedData = lists.map((list) => {
      if (list.id === id) {
        list.checked = checked;
      }
      return list;
    });
    setLists(updatedData);
  };

  const deleteList = () => {
    const updatedData = lists.filter((list) => list.id !== id);
    setLists(updatedData);
  };

  useEffect(() => {
    countWithSetData();
  }, [count]);

  useEffect(() => {
    checkWithSetData();
  }, [checked]);

  return (
    <ListWrapper>
      <CheckBoxWrapper>
        <Checkbox checked={checked} setChecked={setCheckedToggle} />
      </CheckBoxWrapper>
      <ImgWrapper>IMG</ImgWrapper>
      <TitleWrapper>{name}</TitleWrapper>
      <CounterWrapper>
        <Counter value={count} countUp={countUp} countDown={countDown} />
      </CounterWrapper>
      <PriceWrapper>{moneyFormat(price * count)}원</PriceWrapper>
      <CloseBtn onClick={deleteList}>
        <i className="fas fa-times"></i>
      </CloseBtn>
    </ListWrapper>
  );
};

export default List;
