import PropTypes from 'prop-types';


export default function ShopCard({ product }) {
  const { img, name, color, price } = product;

  return (
    <div className="shop-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="color">{color}</p>
      <div className="card-footer">
        <span className="price">${price}</span>
        <button type="button">ADD TO CART</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  }).isRequired
};
