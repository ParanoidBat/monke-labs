import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";
import "@fontsource/poppins";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
