import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeSVG from "../../assets/navigator/home.svg";
import HeartSVG from "../../assets/navigator/nav_heart.svg";
import StatsSVG from "../../assets/navigator/stats.svg";
import ProfileSVG from "../../assets/navigator/profilecircle.svg";
import BagSVG from "../../assets/navigator/bag2.svg";
import styles from "./styles";

export default function Navigator() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      item
      alignItems={"baseline"}
      justifyContent={"space-between"}
      style={styles.nav}
    >
      <Grid item xs={2} onClick={() => navigate("/")}>
        {" "}
        <img src={HomeSVG} alt="Home icon" />
      </Grid>
      <Grid item xs={2}>
        {" "}
        <img src={HeartSVG} alt="Favourite icon" />
      </Grid>
      <Grid item xs={2} onClick={() => navigate("/cart")}>
        {" "}
        <img src={BagSVG} alt="Bag icon" />
      </Grid>
      <Grid item xs={2}>
        {" "}
        <img src={StatsSVG} alt="Stats icon" />
      </Grid>
      <Grid item xs={2}>
        {" "}
        <img src={ProfileSVG} alt="Profile icon" />
      </Grid>
    </Grid>
  );
}
