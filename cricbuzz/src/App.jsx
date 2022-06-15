import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navbar } from "./pages/Navbar"

function App() {


  return (
    <Box bg='silver' pt={10}>
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
     </Routes>
    </Box>
  )
}

export default App
