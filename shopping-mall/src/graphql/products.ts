import { gql } from "graphql-tag";

export type PRODUCT = {
  id: string;
  imageURL: string;
  price: number;
  title: string;
  description: string;
  createAt: string;
};

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imageURL
    price
    title
    description
    createAt
  }
`;

export default GET_PRODUCTS;
