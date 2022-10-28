export type Rating = {
  count: number;
  rate: number;
};

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};
