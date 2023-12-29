import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Navigator from "../../components/Navigator";
import ProductModal from "../../components/ProductModal";
import styles from "./styles";
import WavingHandSVG from "../../assets/home/waving_hand.svg";
import SearchSVG from "../../assets/home/search.svg";
import SaladSVG from "../../assets/home/salad.svg";
import SteakSVG from "../../assets/home/steak.svg";
import GreenSaladSVG from "../../assets/home/greensalad.svg";
import FreshVegiesSVG from "../../assets/home/freshvegies.svg";
import CherriesSVG from "../../assets/home/cherries.svg";
import EggsSVG from "../../assets/home/eggs.svg";
import HeartSVG from "../../assets/home/heart.svg";

const categorySVGs = [SaladSVG, SteakSVG, SaladSVG];
const itemSVGs = [
  {
    svg: GreenSaladSVG,
    info: "Green salad with mashed potatoes",
    price: 12.22,
    desc: "Indulge in the mouthwatering delight of green salad generously topped with rich potatoes.",
    rating: 3.0,
  },
  {
    svg: FreshVegiesSVG,
    info: "Fresh vegetable salad",
    price: 11.22,
    desc: "Indulge in the mouthwatering delight of fresh vegetable generously topped with a rich and savory chocolate syrup.",
    rating: 3.5,
  },
  {
    svg: CherriesSVG,
    info: "Cherries with leaves",
    price: 10.22,
    desc: "Indulge in the mouthwatering delight of cherries generously topped with a rich and savory leaves.",
    rating: 4.0,
  },
  {
    svg: EggsSVG,
    info: "Soft boiled eggs with vegetables",
    price: 15.5,
    desc: "Indulge in the mouthwatering delight of a perfectly boiled eggs generously topped with a rich and savory mushroom sauce.",
    rating: 4.2,
  },
  {
    svg: GreenSaladSVG,
    info: "Green salad with mashed potatoes",
    price: 12.22,
    desc: "Indulge in the mouthwatering delight of green salad generously topped with rich potatoes.",
    rating: 3.0,
  },
  {
    svg: CherriesSVG,
    info: "Cherries with leaves",
    price: 10.22,
    desc: "Indulge in the mouthwatering delight of cherries generously topped with a rich and savory leaves.",
    rating: 4.0,
  },
  {
    svg: EggsSVG,
    info: "Soft boiled eggs with vegetables",
    price: 15.5,
    desc: "Indulge in the mouthwatering delight of a perfectly boiled eggs generously topped with a rich and savory mushroom sauce.",
    rating: 4.2,
  },
  {
    svg: FreshVegiesSVG,
    info: "Fresh vegetable salad",
    price: 11.22,
    desc: "Indulge in the mouthwatering delight of fresh vegetable generously topped with a rich and savory chocolate syrup.",
    rating: 3.5,
  },
];

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  return (
    <Grid container direction={"column"} rowGap={2} style={styles.container}>
      <Grid container item xs={2}>
        <Grid item xs={5}>
          <Typography style={styles.heading}>Hey Danial</Typography>
          <Typography>It&apos;s dinner time!</Typography>
        </Grid>
        <Grid container item xs={7} justifyContent={"space-between"}>
          <Grid item>
            <img src={WavingHandSVG} alt="Waving hand icon" />
          </Grid>
          <Grid item>
            <img src={SearchSVG} alt="Search icon" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={1} justifyContent={"space-between"}>
        <Grid item>
          <Typography style={styles.subHeading}>Categories</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ ...styles.subHeading, color: "#e74c1b" }}>
            See all
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={2} wrap="nowrap" style={{ overflowX: "auto" }}>
        {categorySVGs.map((svg, idx) => {
          return (
            <Grid item key={`category-${idx}`} style={{ marginRight: 15 }}>
              <img src={svg} style={styles.category} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container item xs={1} justifyContent={"space-between"}>
        <Grid item>
          <Typography style={styles.subHeading}>Recommended Items</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ ...styles.subHeading, color: "#e74c1b" }}>
            Filter
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={4}
        style={{ overflowY: "auto", maxHeight: 450 }}
        justifyContent={"space-between"}
        rowGap={1}
      >
        {itemSVGs.map((item, idx) => {
          return (
            <Grid
              container
              item
              direction={"column"}
              key={`item-${idx}`}
              xs={5}
            >
              <Grid item onClick={() => handleItemClick(item)}>
                <img src={item.svg} style={styles.item} />
              </Grid>
              <Grid
                container
                item
                style={styles.info}
                justifyContent={"space-between"}
              >
                <Typography style={styles.infoText}>{item.info}</Typography>
                <Grid item xs={6}>
                  <Typography>
                    <span style={{ color: "#e74c1b" }}>$</span>&nbsp;
                    {item.price}
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "end" }}>
                  <img src={HeartSVG} />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Grid container item xs={2}>
        <Navigator />
      </Grid>
      {openDialog && (
        <ProductModal
          handleClose={() => setOpenDialog(false)}
          open={openDialog}
          product={selectedItem}
        />
      )}
    </Grid>
  );
}
