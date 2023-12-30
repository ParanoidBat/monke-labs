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
      justifyContent={"space-evenly"}
      style={styles.nav}
      sx={{
        "& > div:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Grid item onClick={() => navigate("/")}>
        <Tooltip title="Home">
          <img src={HomeSVG} alt="Home icon" />
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Favourites">
          <img src={HeartSVG} alt="Favourite icon" />
        </Tooltip>
      </Grid>
      <Grid item onClick={() => navigate("/cart")}>
        <Tooltip title="Cart">
          <img src={BagSVG} alt="Bag icon" />
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="History">
          <img src={StatsSVG} alt="Stats icon" />
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Profile">
          <img src={ProfileSVG} alt="Profile icon" />
        </Tooltip>
      </Grid>
    </Grid>
  );
}
