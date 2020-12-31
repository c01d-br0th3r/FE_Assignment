export interface IOkkotData {
  id: number;
  name: string;
  currentCount: number;
  stock: number;
  price: number;
  deliveryPrice: number;
}

export const okkotData = [
  {
    id: 1,
    name: "크리스마스 리스틀",
    currentCount: 1,
    stock: 10,
    price: 4500,
    deliveryPrice: 5000,
  },
  {
    id: 2,
    name: "크리스마스 트리 세트",
    currentCount: 1,
    stock: 3,
    price: 111630,
    deliveryPrice: 5000,
  },
];
