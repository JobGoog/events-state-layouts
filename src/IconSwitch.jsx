import PropTypes from 'prop-types';

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons" style={{ fontSize: 36 }} onClick={onSwitch}>
      {icon}
    </span>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};
