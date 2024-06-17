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

export type Profile = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
