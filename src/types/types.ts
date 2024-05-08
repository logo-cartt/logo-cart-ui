export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  group: string;
  ranking: number;
  reviews: number;
  price: number;
};
