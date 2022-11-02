import { useQuery } from "react-query";
import ProductItems from "../../components/product/Item";
import { Products, GET_PRODUCTS } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductItems {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
