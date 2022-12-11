import styles from "./Input.module.css";

function Input({ id, text, ph, width }) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
      <input type="text" className={styles.input} id={id} placeholder={ph} style={{width}} />
    </>
  );
}

export default Input;
