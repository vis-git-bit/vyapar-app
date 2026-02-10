import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Vyapar from "./pages/Vyapar";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Desktop from "./pages/Desktop";

function App() {
  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
           <Route path="/vyapar" element={<Vyapar/>} />
           <Route path="/about" element ={<AboutUs />} />
           <Route path="/pricing" element ={<Pricing/>} />
           <Route path="/desktop" element ={<Desktop />} />
      </Routes> 
      </BrowserRouter>
  )
}

export default App;
