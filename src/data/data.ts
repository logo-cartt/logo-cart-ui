import { Category, Product, Profile } from "../types/types";

export const categoryNames: Category[] = [
  {
    id: 1,
    name: "Low prices",
  },
  {
    id: 2,
    name: "All",
  },
  {
    id: 3,
    name: "Sports",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 2,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 3,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 4,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 5,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 6,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 7,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
  {
    id: 8,
    name: " T-Shirt. Blue",
    group: "Clothes",
    ranking: 4.8,
    reviews: 11285,
    price: 16.99,
  },
];

export const profileData: Omit<Profile, "id"> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
