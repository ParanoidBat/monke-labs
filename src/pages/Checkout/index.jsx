import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { CartContext } from "../../contexts/CartContext";
import ArrowLeftSVG from "../../assets/product_page/arrowleft.svg";
import MasterCardSVG from "../../assets/checkout/mastercard.svg";
import PayoneerSVG from "../../assets/checkout/payoneer.svg";
import PaypalSVG from "../../assets/checkout/paypal.svg";
import ActionArea from "../../components/ActionArea";
import styles from "./styles";

function Card({ svg, info }) {
  return (
    <Grid container xs={12} alignItems={"center"}>
      <img src={svg} />
      <Typography style={styles.paymentinfo} textAlign={"center"}>
        {info}
      </Typography>
    </Grid>
  );
}

const formLabelStyle = {
  ".MuiFormControlLabel-label": {
    width: "100%",
  },
};

const radioThumbStyle = {
  "&.Mui-checked": {
    color: "black",
  },
};

export default function Checkout() {
  const navigate = useNavigate();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const { cart, setCart } = useContext(CartContext);

  const handleButtonAction = () => {
    setCart([]);
    navigate("/confirm");
  };

  return (
    <Grid container style={styles.container} gap={3}>
      <Grid container item>
        <Grid item xs={4}>
          <img
            onClick={() => navigate(-1)}
            src={ArrowLeftSVG}
            alt="Back icon"
          />
        </Grid>
        <Grid item>
          <Typography style={styles.heading}>Checkout</Typography>
        </Grid>
      </Grid>
      <Typography gutterBottom style={styles.heading}>
        Payment
      </Typography>
      <Grid container item xs={12}>
        <FormControl style={{ width: "80%" }}>
          <RadioGroup
            row={false}
            sx={{
              "& > label": {
                marginBottom: 5,
              },
            }}
          >
            <FormControlLabel
              value={"card"}
              control={<Radio sx={radioThumbStyle} />}
              labelPlacement="start"
              label={<Card svg={MasterCardSVG} info={"Debit/Credit card"} />}
              sx={formLabelStyle}
            />
            <FormControlLabel
              value={"paypal"}
              control={<Radio sx={radioThumbStyle} />}
              labelPlacement="start"
              label={<Card svg={PaypalSVG} info={"PayPal"} />}
              sx={formLabelStyle}
            />
            <FormControlLabel
              value={"payoneer"}
              control={<Radio sx={radioThumbStyle} />}
              labelPlacement="start"
              label={<Card svg={PayoneerSVG} info={"Payoneer"} />}
              sx={formLabelStyle}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography style={styles.heading} gutterBottom>
          Delivery Details
        </Typography>
        <Typography style={styles.details}>
          798 Maple Street, Los Angeles
          <br />
          CA 90001
          <br />
          (888)987-6543
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography style={styles.heading} gutterBottom>
            Order Details
          </Typography>
        </Grid>
        {cart.map((item, idx) => {
          return (
            <Grid item key={idx} xs={6}>
              <Typography style={styles.details}>
                {item.quantity}x {item.info}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <ActionArea
        tag={"Total"}
        price={parseFloat(query.get("total"))}
        btnText={"Pay Now"}
        btnAction={handleButtonAction}
      />
    </Grid>
  );
}
