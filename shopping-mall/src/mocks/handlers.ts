import { graphql } from "msw";
import { QueryKeys } from "../queryClient";
import { v4 as uuid } from "uuid";
import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";
import { GET_CART, ADD_CART } from "../graphql/cart";

const mockProducts = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: uuid(),
    imageUrl: `https://placeimg.com/200/150/${i + 1}`,
    price: 5000,
    title: `임시상품${i + 1}`,
    createAt: new Date(1651021465000 + i * 1000 * 60 * 60 * 10).toString(),
  })))();

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mockProducts,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mockProducts.find(
      (item) => item.id === req.body?.variables.id
    );
    // console.log(req.body?.variables.id, mockProducts);
    console.log(found);
    return res(ctx.data(mockProducts[0]));
  }),

  graphql.query(GET_CART, (req, res, ctx) => {
    return res();
  }),

  graphql.mutation(ADD_CART, (req, res, ctx) => {
    return res(ctx.data({}));
  }),
];
