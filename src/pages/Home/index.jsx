import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navigator from "../../components/Navigator";
import ProductModal from "../../components/ProductModal";
import FilterModal from "../../components/FilterModal";
import WavingHandSVG from "../../assets/home/waving_hand.svg";
import SearchSVG from "../../assets/home/search.svg";
import SaladSVG from "../../assets/home/salad.svg";
import SteakSVG from "../../assets/home/steak.svg";
import GreenSaladSVG from "../../assets/home/greensalad.svg";
import FreshVegiesSVG from "../../assets/home/freshvegies.svg";
import CherriesSVG from "../../assets/home/cherries.svg";
import EggsSVG from "../../assets/home/eggs.svg";
import HeartSVG from "../../assets/home/heart.svg";
import styles from "./styles";

const categorySVGs = [
  SaladSVG,
  SteakSVG,
  SaladSVG,
  SaladSVG,
  SteakSVG,
  SaladSVG,
  SteakSVG,
];
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

const Image = styled("img")(({ theme }) => ({
  width: 140,
  [theme.breakpoints.up("md")]: {
    width: 172,
  },
}));

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  return (
    <Grid
      container
      direction={"column"}
      rowGap={2}
      style={styles.container}
      sx={{
        padding: {
          xs: "18px 30px",
          md: "18px 225px",
        },
        "&>div": {
          padding: "0px 15px",
        },
        "& p": {
          fontFamily: "Poppins",
        },
      }}
    >
      <Grid container item xs={2}>
        <Grid item xs={6} sm={3} md={2}>
          <Typography style={styles.heading}>Hey Danial</Typography>
          <Typography>It&apos;s dinner time!</Typography>
        </Grid>
        <Grid
          container
          item
          xs={6}
          sm={9}
          md={10}
          justifyContent={"space-between"}
        >
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
      <Grid
        container
        item
        xs={2}
        wrap="nowrap"
        style={styles.itemsContainer}
        sx={{
          "&::-webkit-scrollbar": {
            height: "0.4rem",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#e74c1baa",
            outline: "none",
            borderRadius: "100px",
          },
        }}
      >
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
        <Grid item onClick={() => setOpenFilterDialog(true)}>
          <Typography
            style={{ ...styles.subHeading, color: "#e74c1b" }}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Filter
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={4}
        justifyContent={"space-between"}
        rowGap={1}
        sx={{
          "& img:hover": {
            cursor: "pointer",
          },
        }}
      >
        {itemSVGs
          .filter(
            (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
          )
          .map((item, idx) => {
            return (
              <Grid
                container
                item
                direction={"column"}
                key={`item-${idx}`}
                xs={5}
                sm={4}
                md={3}
              >
                <Grid item onClick={() => handleItemClick(item)}>
                  <Image src={item.svg} style={styles.item} />
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
      <Navigator />
      {openDialog && (
        <ProductModal
          handleClose={() => setOpenDialog(false)}
          open={openDialog}
          product={selectedItem}
        />
      )}
      {openFilterDialog && (
        <FilterModal
          handleClose={() => setOpenFilterDialog(false)}
          open={openFilterDialog}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      )}
    </Grid>
  );
}
