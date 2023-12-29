import { Grid, Typography } from "@mui/material";
import styles from "./styles";
import ArrowLeftSVG from '../../assets/product_page/arrowleft.svg'
import CakeSVG from '../../assets/cart/cake.svg'
import SaladSVG from '../../assets/cart/cart_salad.svg'
import SteakSVG from '../../assets/cart/cart_steak.svg'
import VeggiesSVG from '../../assets/cart/cart_veggies.svg'
import MixSaladSVG from '../../assets/cart/mix_salad.svg'
import CartItem from "../../components/CartItem";
import ActionArea from "../../components/ActionArea";

const cartItems = [
    {
        svg: CakeSVG,
        desc: "Vegan strawberry cake",
        quantity: 1,
        price: 10.12
    },
    {
        svg: SaladSVG,
        desc: "Green salad with mashed potatoes",
        quantity: 1,
        price: 11.22
    },
    {
        svg: MixSaladSVG,
        desc: "Mixed salad with strawberries and watermelon",
        quantity: 1,
        price: 10.12
    },
    {
        svg: SteakSVG,
        desc: "Grilled beed steak with mushroom sauce",
        quantity: 3,
        price: 75.12
    },
    {
        svg: VeggiesSVG,
        desc: "Fresh vegetable salad",
        quantity: 1,
        price: 10.12
    }
]

export default function Cart(){
    return (
        <Grid container style={styles.container} gap={3}>
            <Grid container item>
                <Grid item xs={4}>
                    <img src={ArrowLeftSVG} alt="Back icon" />
                </Grid>
                <Grid item>
                    <Typography style={styles.heading}>My Bucket</Typography>
                </Grid>
            </Grid>
            <Grid container item rowGap={2.5}>
                {
                    cartItems.map((item, idx) => <CartItem item={item} key={idx} />)
                }
            </Grid>
            <ActionArea tag={"Total"} price={133.03} btnText={"Checkout"} />
        </Grid>
    )
}