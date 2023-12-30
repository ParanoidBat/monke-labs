import { useState } from "react";
import { Dialog, Grid, Slider, Typography } from "@mui/material";
import styles from "./styles";
import ActionButton from "../ActionButton";

export default function FilterModal({
  handleClose,
  open,
  setPriceRange,
  priceRange,
}) {
  const [value, setValue] = useState(priceRange);

  const handleSet = () => {
    setPriceRange(value);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid container style={styles.container} justifyContent={"center"}>
        <Typography gutterBottom style={styles.heading}>
          Set Price Range
        </Typography>
        <Slider
          value={value}
          step={5}
          valueLabelDisplay="on"
          sx={{
            "& .MuiSlider-thumb": {
              color: "#000",
            },
            "& .MuiSlider-rail": {
              color: "grey",
            },
            "& .MuiSlider-track": {
              color: "#000",
            },
          }}
          onChange={(e, v) => setValue(v)}
        />
        <ActionButton text={"Set"} action={handleSet} width={"min-content"} />
      </Grid>
    </Dialog>
  );
}
