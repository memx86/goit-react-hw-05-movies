import PropTypes from "prop-types";
import s from "./Button.module.css";
function Button({ text, onClick, type = "button", className = "btn" }) {
  return (
    <button type={type} className={s[className]} onClick={onClick}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
