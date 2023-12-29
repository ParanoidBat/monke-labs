import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowLeftSVG from "../../assets/product_page/arrowleft.svg";
import RiderSVG from "../../assets/rider.svg";
import styles from "./styles";
import ActionButton from "../../components/ActionButton";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <Grid container style={styles.container} gap={3} direction={"column"}>
      <Grid item xs={1}>
        <img onClick={() => navigate("/")} src={ArrowLeftSVG} alt="Back icon" />
      </Grid>
      <Grid item xs={1}>
        <Typography style={styles.heading} textAlign={"center"}>
          &quot;Congratulations! Your Order Has Been Placed!&quot;
        </Typography>
      </Grid>
      <Grid item xs={5} alignSelf={"center"}>
        <img src={RiderSVG} alt="Rider icon" />
      </Grid>
      <Grid item xs={3}>
        <Typography textAlign={"center"}>
          Thank you for choosing our services! Your order has been successfully
          palced and is now being processed. We appreciate our trust in us and
          look forward to serving you.
        </Typography>
      </Grid>
      <Grid item xs={2} alignSelf={"center"}>
        <ActionButton text={"Return Home"} action={() => navigate("/")} />
      </Grid>
    </Grid>
  );
}
