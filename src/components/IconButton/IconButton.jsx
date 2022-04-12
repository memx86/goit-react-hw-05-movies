import PropTypes from "prop-types";
import s from "./IconButton.module.css";

function IconButton({ type = "button", icon, role, onClick = () => {} }) {
  const className = s[role] ?? "";
  return (
    <button
      type={type}
      className={className}
      aria-label={role}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

IconButton.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  role: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
