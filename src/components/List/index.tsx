import Counter from "components/Counter";
import { useCounter } from "hooks/useCounter";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { IOkkotData } from "data";
import Checkbox from "components/Checkbox";
import { moneyFormat } from "moneyFormat";
import Label from "components/Label";
import Imagebox from "components/Imagebox";

interface ICartData extends IOkkotData {
  checked: boolean;
}

interface IListProps {
  id: number;
  name: string;
  imageUrl: string;
  currentCount: number;
  stock: number;
  price: number;
  checked?: boolean;
  handleCheckboxClick: React.MouseEventHandler<HTMLElement>;
  lists: ICartData[];
  setLists: Dispatch<SetStateAction<ICartData[]>>;
}

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c2c2c2;
  padding: 12px 8px;
  * {
    display: flex;
    justify-content: center;
  }
`;

const CheckBoxWrapper = styled.div`
  width: 70px;
`;

const ImgWrapper = styled.div`
  width: 150px;
`;

const TitleWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterWrapper = styled.div`
  width: 150px;
`;

const PriceWrapper = styled.div`
  width: 200px;
`;

const CloseBtn = styled.div`
  width: 70px;
  cursor: pointer;
`;

const List: React.FC<IListProps> = ({
  id,
  imageUrl,
  name,
  currentCount,
  stock,
  price,
  checked,
  handleCheckboxClick,
  lists,
  setLists,
}) => {
  const { count, countUp, countDown } = useCounter(currentCount, stock);

  const countWithSetData = () => {
    const updatedData = lists.map((list) => {
      if (list.id === id) {
        list.current_count = count;
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

  return (
    <ListWrapper id={`${id}`}>
      <CheckBoxWrapper>
        <Checkbox
          id={`${id}`}
          checked={checked}
          setChecked={handleCheckboxClick}
        />
      </CheckBoxWrapper>
      <ImgWrapper>
        <Imagebox src={imageUrl} alt="1" width="100px" height="100px" />
      </ImgWrapper>
      <TitleWrapper>
        <Label value={name} weight="500" />
      </TitleWrapper>
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
