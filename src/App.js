import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import News from "./pages/News"
import HalfMarathon from "./pages/HalfMarathon"
import Members from "./pages/Members"
import Contact from "./pages/Contact"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={ <SharedLayout /> }>
  <Route index element={ <Home /> } />
  <Route path="/news" element={ <News /> } />
  <Route path="/halfmarathon" element={<HalfMarathon />} />
  <Route path="/members" element={<Members />} />
  <Route path="/contact" element={<Contact />} />
  
  </Route>
  </Routes>
  </BrowserRouter>
  }

export default App