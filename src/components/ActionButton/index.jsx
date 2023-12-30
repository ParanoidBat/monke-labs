import styles from "./styles";

export default function ActionButton({ text, action, width = 188 }) {
  return (
    <button onClick={action} style={{ ...styles.button, width: width }}>
      {text}
    </button>
  );
}
