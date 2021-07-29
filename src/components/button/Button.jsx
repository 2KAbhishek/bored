import PropTypes from 'prop-types';
import './Button.css';

const Button = ({color, text, link}) => {
  return (
    <a href={link}>
      <button className='Button' style={{backgroundColor: color}}>
        {text}
      </button>
    </a>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
