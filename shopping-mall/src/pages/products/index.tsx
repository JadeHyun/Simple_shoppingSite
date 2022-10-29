import { useQuery } from "react-query";
import ProductItems from "../../components/product/Item";
import GET_PRODUCTS, { PRODUCTS } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { Products } from "../../type";

const ProductList = () => {
  const { data } = useQuery<PRODUCTS>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  console.log(data);

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
