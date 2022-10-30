import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { title, imageUrl, description, price },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail_title">{title}</p>
    <img src={imageUrl} alt="API 더미이미지" className="product-detail_image" />
    <span>${price}</span>
    <p>{description}</p>
  </div>
);

export default ProductDetail;
