import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";

import { Product } from "../../type";
import ProductItems from "../../components/product/Item";
const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  if (!data) return null;
  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.map((product) => (
          <ProductItems {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
