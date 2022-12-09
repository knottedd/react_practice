import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, click, id }) {
  return (
    <button className={styles.btn} onClick={click} id={id}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
