import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input({ id, text, ph }) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
      <input type="text" className={styles.input} id={id} placeholder={ph} />
    </>
  );
}

export default Input;
