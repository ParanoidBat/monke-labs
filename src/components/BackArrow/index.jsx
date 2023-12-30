import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/product_page/arrowleft.svg";

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function BackArrow({ location }) {
  const navigate = useNavigate();
  return (
    <Image src={ArrowLeft} alt="Back icon" onClick={() => navigate(location)} />
  );
}
