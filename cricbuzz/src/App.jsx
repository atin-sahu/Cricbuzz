import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Match } from "./pages/Match"
import { Navbar } from "./pages/Navbar"
import { News } from "./pages/News"
import { Footer } from "./components/Footer";
import { AuthWrapper } from "./components/AuthWrapper"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"


function App() {


  return (
    <Box bg='silver' pt={10}>
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/news" element={<News></News>}></Route>
      <Route path="/match" element={<Match index={0}></Match>}></Route>
      <Route path="/series" element={<Match index={1}></Match>}></Route>
      <Route path="/teams" element={<Match index={3}></Match>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/login" element={<AuthWrapper><Login></Login></AuthWrapper>}></Route>
     </Routes>
     <Footer></Footer>
    </Box>
  )
}

export default App
