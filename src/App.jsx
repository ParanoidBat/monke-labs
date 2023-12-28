import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes"

function App (){
  return( 
    <Router>
      <div style={{padding: "0px 30px" }} >
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
