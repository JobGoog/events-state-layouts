import PropTypes from 'prop-types';
import ShopCard from './ShopCard';


export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((p) => (
        <ShopCard key={`${p.name}-${p.color}`} product={p} />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};
