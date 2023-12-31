import { Grid, Tooltip } from "@mui/material";
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
      alignItems={"end"}
      style={styles.nav}
      sx={{
        "& > div:hover": {
          cursor: "pointer",
        },
        justifyContent: {
          xs: "space-between",
          sm: "space-evenly",
        },
      }}
    >
      <Grid item xs={2} onClick={() => navigate("/")}>
        <Tooltip title="Home">
          <img src={HomeSVG} alt="Home icon" />
        </Tooltip>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Favourites">
          <img src={HeartSVG} alt="Favourite icon" />
        </Tooltip>
      </Grid>
      <Grid item xs={2} onClick={() => navigate("/cart")}>
        <Tooltip title="Cart">
          <img src={BagSVG} alt="Bag icon" />
        </Tooltip>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="History">
          <img src={StatsSVG} alt="Stats icon" />
        </Tooltip>
      </Grid>
      <Grid item xs={2}>
        <Tooltip title="Profile">
          <img src={ProfileSVG} alt="Profile icon" />
        </Tooltip>
      </Grid>
    </Grid>
  );
}
