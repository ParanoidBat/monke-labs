import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    )
}