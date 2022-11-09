import { Product } from "../../graphql/products";
import ProductItems from "./Item";

const ProductList = ({ list }: { list: Product[] }) => {
  return (
    <ul className="products">
      {list.map((product) => (
        <ProductItems {...product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductList;
