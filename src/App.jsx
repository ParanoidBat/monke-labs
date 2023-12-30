import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

import "./App.css";
import "./fonts/Poppins-Bold.ttf";
import "./fonts/Poppins-Medium.ttf";
import "./fonts/Poppins-Regular.ttf";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
