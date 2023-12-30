import { styled } from "@mui/material/styles";
import styles from "./styles";

export default function ActionButton({ text, action, width = 188 }) {
  const Button = styled("button")(() => ({
    ...styles.button,
    width: width,
    "&:hover": {
      cursor: "pointer",
    },
  }));
  return <Button onClick={action}>{text}</Button>;
}
