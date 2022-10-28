import { Product } from "../../type";

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail_category">{category}</p>
    <p className="product-detail_title">{title}</p>
    <img src={image} alt="API 더미이미지" className="product-detail_image" />
    <span>${price}</span>
    <span className="product-detail_rating">{rate}</span>
    <p>{description}</p>
  </div>
);

export default ProductDetail;
