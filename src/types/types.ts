export type Category = {
  id: number;
  name: string;
};

export type Comment = {
  client: string;
  rating: number;
  commentText: string;
};

export type Product = {
  id: number;
  name: string;
  group: string;
  ranking: number;
  reviews: number;
  price: number;
  image: string;
  seller: string;
  deliveryTime: string;
  deliveryPrice: string;
  quantity: number;
  description?: string;
  comments?: Comment[];
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserLogin = Omit<Profile, "id" | "name" | "confirmPassword">;
export type UserEmail = {
  email: string;
};
