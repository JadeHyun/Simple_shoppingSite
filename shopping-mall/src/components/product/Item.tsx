import { Product } from "../../type";

export const ProductItems = ({
  category,
  description,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li>
      <p>{category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <img src={image} alt="API 더미이미지" />
      <span>${price}</span>
      {/* <span>{rating}</span> */}
    </li>
  );
};
