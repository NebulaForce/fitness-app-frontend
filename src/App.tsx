import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import CustomRoutes from './navigation/CustomRoutes'

function App() {

  return (
    <Router>
      <CustomRoutes />
    </Router>
  )
}

export default App
