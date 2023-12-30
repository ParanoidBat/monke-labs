import { Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowLeftSVG from "../../assets/product_page/arrowleft.svg";
import RiderSVG from "../../assets/rider.svg";
import styles from "./styles";
import ActionButton from "../../components/ActionButton";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <Stack
      style={styles.container}
      gap={3}
      sx={{
        padding: {
          xs: "15px 15px",
          md: "15px 225px",
        },
      }}
    >
      <Grid>
        <img onClick={() => navigate("/")} src={ArrowLeftSVG} alt="Back icon" />
      </Grid>
      <Grid>
        <Typography style={styles.heading} textAlign={"center"}>
          &quot;Congratulations! Your Order Has Been Placed!&quot;
        </Typography>
      </Grid>
      <Grid alignSelf={"center"}>
        <img src={RiderSVG} alt="Rider icon" />
      </Grid>
      <Grid
        sx={{
          padding: {
            md: "0px 100px",
          },
        }}
      >
        <Typography textAlign={"center"}>
          Thank you for choosing our services! Your order has been successfully
          palced and is now being processed. We appreciate our trust in us and
          look forward to serving you.
        </Typography>
      </Grid>
      <Grid alignSelf={"center"}>
        <ActionButton
          text={"Return Home"}
          action={() => navigate("/")}
          width={211}
        />
      </Grid>
    </Stack>
  );
}
