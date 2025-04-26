import PropTypes from 'prop-types';


export default function ShopItem({ product }) {
  const { img, name, color, price } = product;

  return (
    <li className="shop-item">
      <img src={img} alt={name} />
      <span className="name">{name}</span>
      <span className="color">{color}</span>
      <span className="price">${price}</span>
      <button type="button">ADD TO CART</button>
    </li>
  );
}

ShopItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  }).isRequired
};
