import styles from "./Input.module.css";

function Input({ id, text, ph, width, type, name, onChange }) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
      <input
        type={type}
        className={styles.input}
        id={id}
        placeholder={ph}
        style={{ width }}
        name={name}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
