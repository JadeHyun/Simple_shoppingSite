import { graphql } from "msw";
import { QueryKeys } from "../queryClient";
import { v4 as uuid } from "uuid";
import GET_PRODUCTS from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageURL: `https://placeimg.com/640/480/${i + 1}`,
  price: 5000,
  title: `임시상품${i + 1}`,
  createAt: new Date(1651021465000 + i * 1000 * 60 * 60 * 10).toString(),
}));

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),
];
