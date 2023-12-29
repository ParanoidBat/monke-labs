import styles from "./styles";

export default function ActionButton({text, action}){
    return <button onClick={action} style={styles.button}>{text}</button>
}