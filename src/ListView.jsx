import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import './ListView.css';

export default function ListView({ items }) {
  return (
    <ul className="list-view">
      {items.map((p) => (
        <ShopItem key={`${p.name}-${p.color}`} product={p} />
      ))}
    </ul>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
